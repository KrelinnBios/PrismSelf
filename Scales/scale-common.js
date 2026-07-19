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
		markStructure,
		renderResultRadar,
		renderResultSummary,
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
