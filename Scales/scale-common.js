(function () {
	'use strict';

	const defaultConfig = {
		formId: '',
		storageKey: '',
		totalQuestions: 0,
		resultId: 'result',
		progressTextId: 'globalProgressText',
		progressBarId: 'globalProgressBar'
	};
	const radarCharts = new Map();
	const radarConfigs = new Map();
	const resultObservers = new WeakMap();

	function getConfig() {
		return Object.assign({}, defaultConfig, window.PRISM_SCALE_CONFIG || {});
	}

	function getForm(config) {
		return config.formId ? document.getElementById(config.formId) : document.querySelector('form');
	}

	function getAnsweredCount(form) {
		if (!form) return 0;
		const names = new Set();
		form.querySelectorAll('select').forEach(select => {
			if (select.value !== '') names.add(select.name || select.id);
		});
		return names.size;
	}

	function updateProgress(config = getConfig()) {
		const form = getForm(config);
		const total = Number(config.totalQuestions) || form?.querySelectorAll('select').length || 0;
		const answered = getAnsweredCount(form);
		const progressText = document.getElementById(config.progressTextId);
		const progressBar = document.getElementById(config.progressBarId);
		if (progressText) progressText.textContent = `进度：${answered}/${total}`;
		if (progressBar) progressBar.style.width = total ? `${Math.round((answered / total) * 100)}%` : '0%';
	}

	function collectAnswers(form = getForm(getConfig())) {
		const answers = {};
		if (!form) return answers;
		form.querySelectorAll('select').forEach(select => {
			if (select.value !== '') answers[select.name || select.id] = select.value;
		});
		return answers;
	}

	function cssColor(name, fallback) {
		return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
	}

	function drawResultRadar(config) {
		const canvasId = config.canvasId || 'radarChart';
		const canvas = document.getElementById(canvasId);
		if (!canvas || typeof window.Chart !== 'function') return null;

		const previous = radarCharts.get(canvasId);
		if (previous) previous.destroy();

		const max = Number(config.max) || 5;
		const dark = document.documentElement.getAttribute('data-theme') === 'dark';
		const accent = cssColor('--scale-accent', dark ? '#91add3' : '#3e5a80');
		const ink = cssColor('--scale-ink', dark ? '#e6edf5' : '#263447');
		const line = cssColor('--scale-line', dark ? '#56677b' : '#dde5ee');

		const chart = new window.Chart(canvas.getContext('2d'), {
			type: 'radar',
			data: {
				labels: config.labels,
				datasets: [{
					label: config.datasetLabel || '维度得分',
					data: config.values,
					backgroundColor: dark ? 'rgba(145, 173, 211, 0.22)' : 'rgba(62, 90, 128, 0.18)',
					borderColor: accent,
					pointBackgroundColor: accent,
					pointBorderColor: dark ? '#18212d' : '#ffffff',
					pointHoverBackgroundColor: ink,
					pointHoverBorderColor: accent,
					borderWidth: 2.4,
					pointRadius: 3.5,
					pointHoverRadius: 5
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: true,
				animation: { duration: 450 },
				scales: {
					r: {
						beginAtZero: true,
						min: 0,
						max,
						ticks: { display: false, stepSize: max / 5, backdropColor: 'transparent' },
						grid: { color: line },
						angleLines: { color: line },
						pointLabels: { color: ink, font: { size: 12, weight: 600 }, padding: 8 }
					}
				},
				plugins: {
					legend: { display: false },
					tooltip: {
						callbacks: {
							label: context => `${context.dataset.label}：${Number(context.raw).toFixed(1)} / ${max}`
						}
					}
				}
			}
		});

		radarCharts.set(canvasId, chart);
		return chart;
	}

	function renderResultRadar(config) {
		if (!config || !Array.isArray(config.labels) || !Array.isArray(config.values)) return null;
		const canvasId = config.canvasId || 'radarChart';
		const normalized = Object.assign({}, config, {
			canvasId,
			labels: config.labels.slice(),
			values: config.values.map(value => Number(value) || 0)
		});
		radarConfigs.set(canvasId, normalized);
		return drawResultRadar(normalized);
	}

	function escapeHtml(value) {
		return String(value ?? '').replace(/[&<>"']/g, character => ({
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#39;'
		}[character]));
	}

	function renderResultSummary(config = {}) {
		const summary = document.getElementById(config.targetId || 'scoreSummary');
		if (!summary) return null;

		const metrics = Array.isArray(config.metrics) ? config.metrics : [];
		const columnsClass = metrics.length === 2
			? ' summary-metrics--two'
			: metrics.length === 4
				? ' summary-metrics--four'
				: '';
		const metricsHtml = metrics.length
			? `<div class="summary-metrics${columnsClass}">${metrics.map(metric => `
				<div class="summary-metric">
					<span>${escapeHtml(metric.label)}</span>
					<strong>${escapeHtml(metric.value)}</strong>
				</div>`).join('')}
			</div>`
			: '';

		summary.innerHTML = `
			<h3 class="result-primary-title">${escapeHtml(config.title || '')}</h3>
			${metricsHtml}`;

		const lead = document.getElementById(config.leadId || 'typeJudgment');
		if (lead) {
			lead.innerHTML = config.lead
				? `<p class="result-lead">${escapeHtml(config.lead)}</p>`
				: '';
		}

		return summary;
	}

	function createResultDimensionHeader(config = {}) {
		const metrics = Array.isArray(config.metrics)
			? config.metrics
			: [{ score: config.score, max: config.max, level: config.level }];
		const metricHtml = metrics
			.filter(metric => metric && metric.score !== undefined && metric.score !== null)
			.map(metric => {
				const numericScore = Number(metric.score);
				const numericMax = Number(metric.max ?? 5);
				const scoreText = Number.isFinite(numericScore) ? numericScore.toFixed(1) : String(metric.score);
				const maxText = Number.isFinite(numericMax) ? numericMax.toFixed(1) : String(metric.max ?? 5);
				return '<span class="result-dimension-metric">' +
					(metric.label ? '<small>' + escapeHtml(metric.label) + '</small>' : '') +
					'<strong>' + escapeHtml(scoreText) + ' / ' + escapeHtml(maxText) + '</strong>' +
					(metric.level ? '<span>' + escapeHtml(metric.level) + '</span>' : '') +
					'</span>';
			})
			.join('');
		const index = config.index === undefined || config.index === null
			? ''
			: '<span class="result-dimension-index">' + escapeHtml(config.index) + '.</span>';

		return '<div class="result-dimension-header">' +
			'<h4 class="result-dimension-title">' + index + escapeHtml(config.title || '') + '</h4>' +
			(metricHtml ? '<div class="result-dimension-metrics">' + metricHtml + '</div>' : '') +
			'</div>';
	}

	function renderReflectionActions(target, actions, options = {}) {
		const container = typeof target === 'string' ? document.getElementById(target) : target;
		if (!container) return;
		const items = Array.isArray(actions) ? actions.slice(0, 5) : [];
		container.innerHTML =
			'<h3 class="result-section-heading">' + escapeHtml(options.heading || '深度反思与行动建议') + '</h3>' +
			'<section class="insight-card reflection-actions">' +
			items.map((item, index) =>
				'<div class="reflection-action-item">' +
				'<h4>' + (index + 1) + '. ' + escapeHtml(item.title || '') + '</h4>' +
				'<p>' + (item.text || '') + '</p>' +
				'</div>'
			).join('') +
			'</section>';
	}

	function destroyResultRadar(canvasId = 'radarChart') {
		const chart = radarCharts.get(canvasId);
		if (chart) chart.destroy();
		radarCharts.delete(canvasId);
		radarConfigs.delete(canvasId);
	}

	function normalizeResultContent(result) {
		const reportTitle = result.querySelector(':scope > h2');
		if (reportTitle) reportTitle.classList.add('result-report-title');

		result.querySelectorAll('.result-section-slot').forEach(section => {
			const heading = section.querySelector(':scope > h3');
			if (heading) heading.classList.add('result-section-heading');
		});

		result.querySelectorAll('table').forEach(table => {
			if (table.parentElement?.classList.contains('result-table-shell')) return;
			const shell = document.createElement('div');
			shell.className = 'result-table-shell';
			table.parentNode.insertBefore(shell, table);
			shell.appendChild(table);
		});
	}

	function markStructure(config = getConfig()) {
		document.body.classList.add('scale-page');

		const form = getForm(config);
		if (form) {
			form.classList.add('scale-form');
			form.dataset.scaleForm = 'true';
			const actionBlock = Array.from(form.children).find(child => child.querySelectorAll && child.querySelectorAll('button').length >= 2);
			if (actionBlock) actionBlock.classList.add('scale-actions');
		}

		const result = document.getElementById(config.resultId);
		if (result) {
			result.classList.add('scale-result');
			result.dataset.scaleResult = 'true';
			[
				'currentProfileAnalysis',
				'mainInterpretation',
				'detailedAnalysis',
				'deepPersonalAnalysis',
				'sectionScores',
				'personalizedSuggestions'
			].forEach(id => {
				const section = document.getElementById(id);
				if (section && result.contains(section)) section.classList.add('result-section-slot');
			});
			normalizeResultContent(result);
			if (!resultObservers.has(result)) {
				const observer = new MutationObserver(() => normalizeResultContent(result));
				observer.observe(result, { childList: true, subtree: true });
				resultObservers.set(result, observer);
			}
		}
	}

	function cleanExampleText(text) {
		return String(text || '')
			.replace(/^\s*(?:具体案例：)?\s*(?:例[一二三]：|例如[：，,]?)/, '')
			.replace(/\s+/g, ' ')
			.replace(/[，,]也$/, '')
			.replace(/[。！？!?；;，,\s]+$/, '')
			.trim();
	}

	function replaceExamplePhrase(text, replacements, fallback) {
		for (const [pattern, replacement] of replacements) {
			if (pattern.test(text)) return text.replace(pattern, replacement);
		}
		return fallback(text);
	}

	function softenExample(text, fallbackText = '') {
		const source = cleanExampleText(text);
		return replaceExamplePhrase(source, [
			[/很晚才察觉/, '偶尔要到较晚才察觉'],
			[/没有及时察觉/, '偶尔不能及时察觉'],
			[/我很难/, '我偶尔会难以'],
			[/很难/, '偶尔难以'],
			[/难以/, '偶尔难以'],
			[/无法/, '偶尔无法'],
			[/我不太在意/, '我有时不太在意'],
			[/不太在意/, '有时不太在意'],
			[/我不把/, '我有时不把'],
			[/不把/, '有时不把'],
			[/我不会/, '我有时不会'],
			[/不会/, '有时不会'],
			[/我不愿/, '我有时不愿'],
			[/不愿/, '有时不愿'],
			[/我可能/, '我有时可能'],
			[/可能/, '有时可能'],
			[/我也会/, '我有时也会'],
			[/也会/, '有时也会'],
			[/我仍会/, '我有时仍会'],
			[/仍会/, '有时仍会'],
			[/我仍能/, '我有时仍能'],
			[/仍能/, '有时仍能'],
			[/我仍/, '我有时仍'],
			[/仍/, '有时仍'],
			[/总是/, '有时'],
			[/始终/, '有时'],
			[/几乎每天/, '偶尔'],
			[/经常/, '偶尔'],
			[/常常/, '偶尔'],
			[/通常/, '有时'],
			[/我常/, '我偶尔'],
			[/我会/, '我有时会'],
			[/我能/, '我有时能'],
			[/能够/, '有时能够'],
			[/(?<![功可])能/, '有时能'],
			[/(^|[，；。,!！?？\s])会/, '$1有时会'],
			[/容易/, '有时容易'],
			[/我更习惯/, '我有时更习惯'],
			[/更习惯/, '有时更习惯'],
			[/喜欢/, '有时喜欢'],
			[/不只/, '有时不只'],
			[/先/, '有时先'],
			[/应当/, '在部分情境下应当'],
			[/应该/, '在部分情境下应该'],
			[/(^|[^不])需要/, '$1偶尔需要'],
			[/可以/, '有时可以'],
			[/倾向于/, '有时倾向于'],
			[/愿意/, '有时愿意'],
			[/认为/, '有时认为'],
			[/支持/, '在部分情境下支持'],
			[/反对/, '在部分情境下反对'],
			[/关注/, '在部分议题中关注']
		], value => fallbackText || `只在部分情境下会出现：${value}`);
	}

	function contrastExample(text, fallbackText = '') {
		const source = cleanExampleText(text);
		return replaceExamplePhrase(source, [
			[/很晚才察觉/, '通常能较早察觉'],
			[/没有及时察觉/, '通常能及时察觉'],
			[/并不固定/, '通常比较稳定'],
			[/我很难/, '我通常能够'],
			[/很难/, '通常能够'],
			[/难以/, '通常能够'],
			[/无法/, '通常能够'],
			[/不容易/, '通常能够'],
			[/我不太在意/, '我通常很在意'],
			[/不太在意/, '通常很在意'],
			[/我不把/, '我通常会把'],
			[/不把/, '通常会把'],
			[/我不会/, '我通常会'],
			[/不会/, '通常会'],
			[/我不愿/, '我通常愿意'],
			[/不愿/, '通常愿意'],
			[/我可能/, '我通常不会'],
			[/可能/, '通常不会'],
			[/我也会/, '我通常不会'],
			[/也会/, '通常不会'],
			[/我仍会/, '我通常不会'],
			[/仍会/, '通常不会'],
			[/我仍能/, '我通常很难'],
			[/仍能/, '通常很难'],
			[/我仍/, '我很少'],
			[/仍/, '很少'],
			[/总是/, '很少'],
			[/始终/, '很少'],
			[/几乎每天/, '很少'],
			[/经常/, '很少'],
			[/常常/, '很少'],
			[/通常/, '很少'],
			[/我常/, '我很少'],
			[/我会/, '我通常不会'],
			[/我能/, '我通常很难'],
			[/能够/, '通常很难'],
			[/(?<![功可])能/, '通常很难'],
			[/(^|[，；。,!！?？\s])会/, '$1通常不会'],
			[/容易/, '通常不容易'],
			[/我更习惯/, '我通常不习惯'],
			[/更习惯/, '通常不习惯'],
			[/喜欢/, '通常不喜欢'],
			[/不只/, '通常只'],
			[/先/, '通常不先'],
			[/应当/, '通常不认为应当'],
			[/应该/, '通常不认为应该'],
			[/不需要/, '通常需要'],
			[/(^|[^不])需要/, '$1通常不需要'],
			[/可以/, '通常不会'],
			[/必须/, '通常不必'],
			[/忘记/, '通常能记得'],
			[/遗漏/, '通常能留意到'],
			[/倾向于/, '通常不倾向于'],
			[/愿意/, '通常不愿意'],
			[/认为/, '通常不认为'],
			[/支持/, '通常不支持'],
			[/反对/, '通常不反对'],
			[/关注/, '通常不会特别关注']
		], value => fallbackText || `在相同情境下，通常不会出现“${value}”所描述的反应`);
	}

	function formatExampleSet(primary, options = {}) {
		const high = cleanExampleText(primary);
		const middle = cleanExampleText(options.middle || options.middleFallback || '这种情况只在部分场合出现，具体表现会随情境变化');
		const low = cleanExampleText(options.low || options.lowFallback || '在相似情境中通常不会出现例一所描述的反应');
		const highScore = options.highScore || '4–5';
		const middleScore = options.middleScore || '2–3';
		const lowScore = options.lowScore || '0–1';
		return `例一：${high}，可选 ${highScore} 分；例二：${middle}，可选 ${middleScore} 分；例三：${low}，可选 ${lowScore} 分。`;
	}

	function classifyLegacyExample(text) {
		if (/(?:4\s*(?:–|-|或)\s*5|5分|4分|高分)/.test(text)) return 'high';
		if (/(?:2\s*(?:–|-|或)\s*3|3分|2分|中等分)/.test(text)) return 'middle';
		if (/(?:0\s*(?:–|-|或)\s*1|1分|0分|低分)/.test(text)) return 'low';
		return '';
	}

	function removeLegacyScore(text) {
		const score = '(?:高分|中等分|低分|\\d\\s*(?:(?:–|-|或)\\s*\\d)?分)';
		return cleanExampleText(text
			.replace(new RegExp('[，,]?(?:则)?可据频率选择' + score, 'g'), '')
			.replace(new RegExp('[，,]?(?:则)?可选择' + score, 'g'), '')
			.replace(new RegExp('[，,]?(?:则)?可选' + score, 'g'), '')
			.replace(new RegExp('[，,]?(?:则)?选择' + score, 'g'), '')
			.replace(new RegExp('[，,]?(?:则)?选' + score, 'g'), '')
			.replace(new RegExp('[，,]?(?:这)?(?:则)?(?:非常)?符合' + score, 'g'), '')
			.replace(new RegExp('[，,]?(?:则)?为(?:高|中等|低)分', 'g'), ''));
	}

	function parseLegacyExamples(text) {
		const body = String(text || '').replace(/^\s*具体案例：\s*/, '');
		const chunks = body.split(/例[一二三]：/).slice(1);
		const result = { high: '', middle: '', low: '', first: '' };
		chunks.forEach(chunk => {
			chunk.split(/[；;。]相反，?/).forEach(part => {
				const cleaned = removeLegacyScore(part);
				if (!cleaned) return;
				if (!result.first) result.first = cleaned;
				const level = classifyLegacyExample(part);
				if (level && !result[level]) result[level] = cleaned;
			});
		});
		return result;
	}

	function normalizeQuestionExamples(container, options = {}) {
		if (!container) return;
		container.querySelectorAll('.question').forEach(question => {
			const titleElement = question.querySelector('.question-title');
			const variantSource = String(titleElement?.textContent || '').replace(/^\s*\d+[.、]\s*/, '').trim();
			const declarativeSource = variantSource.replace(/^(?:您|你)是否/, '你').replace(/[？?]$/, '');
			const paragraph = Array.from(question.querySelectorAll('.explanation p')).find(item => item.querySelector('strong')?.textContent.trim() === '具体案例：');
			if (!paragraph) return;
			const parsed = parseLegacyExamples(paragraph.textContent);
			const minimumLength = Number(options.minExampleLength) || 0;
			const keep = value => value && value.length >= minimumLength ? value : '';
			const primary = keep(parsed.high) || keep(parsed.first) || declarativeSource;
			const preferFallback = options.preferFallbackForQuestions && /是否|如何|多少|哪/.test(variantSource);
			const formatted = formatExampleSet(primary, {
				variantSource: declarativeSource,
				middle: keep(parsed.middle) || (preferFallback ? options.middleFallback : ''),
				low: keep(parsed.low) || (preferFallback ? options.lowFallback : ''),
				middleFallback: options.middleFallback,
				lowFallback: options.lowFallback,
				highScore: options.highScore,
				middleScore: options.middleScore,
				lowScore: options.lowScore
			});
			const label = document.createElement('strong');
			label.textContent = '具体案例：';
			paragraph.replaceChildren(label, document.createTextNode(formatted));
		});
	}
	function bindCommonEvents(config = getConfig()) {
		const form = getForm(config);
		if (form) {
			form.addEventListener('change', () => updateProgress(config));
		}
	}

	function init(config = getConfig()) {
		markStructure(config);
		bindCommonEvents(config);
		updateProgress(config);
	}

	window.PrismScale = {
		collectAnswers,
		destroyResultRadar,
		getAnsweredCount,
		getConfig,
		init,
		createResultDimensionHeader,
		renderReflectionActions,
		markStructure,
		renderResultRadar,
		renderResultSummary,
		formatExampleSet,
		normalizeQuestionExamples,
		updateProgress
	};

	new MutationObserver(mutations => {
		if (!mutations.some(mutation => mutation.attributeName === 'data-theme')) return;
		radarConfigs.forEach(config => drawResultRadar(config));
	}).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', () => init(), { once: true });
	} else {
		init();
	}
})();
