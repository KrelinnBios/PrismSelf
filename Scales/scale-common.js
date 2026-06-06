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
		getAnsweredCount,
		getConfig,
		init,
		markStructure,
		updateProgress
	};

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', () => init(), { once: true });
	} else {
		init();
	}
})();
