'use strict';

(() => {
  const scoreOptions = [
    { value: 1, label: '非常不符合' },
    { value: 2, label: '比较不符合' },
    { value: 3, label: '一般／视情况而定' },
    { value: 4, label: '比较符合' },
    { value: 5, label: '非常符合' }
  ];

  const optionMarkup = [
    '<option value="" disabled selected>请选择...</option>',
    ...scoreOptions.map(option => `<option value=${option.value}>${option.value} - ${option.label}</option>`)
  ].join('');

  function create(config) {
    const dimensions = config.dimensions;
    const facets = config.facets;
    const facetInterpretations = config.facetInterpretations;
    const sections = config.sections;
    const questions = config.questions;
    const classPrefix = config.classPrefix || 'trait';
    const interstitialFacetKey = config.interstitialFacetKey || '';
    const interstitialFacet = interstitialFacetKey ? facets[interstitialFacetKey] : null;
    const form = document.getElementById(window.PRISM_SCALE_CONFIG.formId);
    const container = document.getElementById('questionsContainer');
    const result = document.getElementById(window.PRISM_SCALE_CONFIG.resultId || 'result');
    const storageKey = window.PRISM_SCALE_CONFIG.storageKey;

    if (!form || !container || !result) throw new Error('人格量表页面结构不完整');
    if (questions.length !== window.PRISM_SCALE_CONFIG.totalQuestions) throw new Error('题库数量与页面配置不一致');

    const dimensionOrder = dimensions.map(dimension => dimension.key);
    const facetKeysByDimension = Object.fromEntries(dimensions.map(dimension => [
      dimension.key,
      Object.values(facets).filter(facet => facet.dimension === dimension.key).map(facet => facet.key)
    ]));
    const average = values => values.reduce((sum, value) => sum + value, 0) / values.length;
    const answerGuidance = config.answerGuidance || '若这种表现与你过去一年中较稳定的自己高度一致，可选 4–5 分；若会随情境变化，可选 3 分；若通常不符合或更接近相反表现，可选 1–2 分。';

    function updateProgress() {
      const answered = [...form.querySelectorAll('select')].filter(select => select.value !== '').length;
      const progressText = document.getElementById('globalProgressText');
      const progressBar = document.getElementById('globalProgressBar');
      if (progressText) progressText.textContent = `进度：${answered}/${questions.length}`;
      if (progressBar) progressBar.style.width = `${Math.round(answered / questions.length * 100)}%`;
    }

    function saveAnswers() {
      const answers = {};
      form.querySelectorAll('select').forEach(select => {
        if (select.value) answers[select.name] = select.value;
      });
      localStorage.setItem(storageKey, JSON.stringify(answers));
      updateProgress();
    }

    function restoreAnswers() {
      try {
        const answers = JSON.parse(localStorage.getItem(storageKey) || '{}');
        form.querySelectorAll('select').forEach(select => {
          if (answers[select.name]) select.value = answers[select.name];
        });
      } catch (_) {
        localStorage.removeItem(storageKey);
      }
      updateProgress();
    }

    function toggleExplanation(title, explanation) {
      const willOpen = !explanation.classList.contains('show');
      document.querySelectorAll('#questionsContainer .explanation.show').forEach(item => item.classList.remove('show'));
      document.querySelectorAll('#questionsContainer .question-title[aria-expanded=true]').forEach(item => item.setAttribute('aria-expanded', 'false'));
      if (willOpen) {
        explanation.classList.add('show');
        title.setAttribute('aria-expanded', 'true');
      }
    }

    function renderQuestions() {
      container.innerHTML = '';
      sections.forEach((section, sectionIndex) => {
        const block = document.createElement('div');
        block.className = 'section';
        block.innerHTML = `
          <h2>${section.title}</h2>
          <p style="color: #666; margin-bottom: 20px;">${section.description}</p>
        `;

        questions.filter(question => question.section === sectionIndex + 1).forEach(question => {
          const card = document.createElement('div');
          card.className = 'question';
          card.innerHTML = `
            <div class="question-title" tabindex="0" role="button" aria-expanded="false" aria-controls="explanation-q${question.id}">
              <span class="q-number">${question.id}.</span> ${question.text}
            </div>
            <select name="q${question.id}" data-id="${question.id}" aria-label="第${question.id}题：${question.text}" required>${optionMarkup}</select>
            <div class="explanation" id="explanation-q${question.id}">
              <p><strong>本题用意：</strong>${question.note}</p>
              <p><strong>具体案例：</strong>${question.example}${answerGuidance}</p>
            </div>
          `;
          const title = card.querySelector('.question-title');
          const explanation = card.querySelector('.explanation');
          title.addEventListener('click', () => toggleExplanation(title, explanation));
          title.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              toggleExplanation(title, explanation);
            }
          });
          block.appendChild(card);
        });
        container.appendChild(block);
      });
    }

    function calculateScores(formData) {
      const dimensionValues = Object.fromEntries(dimensionOrder.map(key => [key, []]));
      const facetValues = Object.fromEntries(Object.keys(facets).map(key => [key, []]));
      const contextValues = {};

      sections.forEach((_, index) => {
        contextValues[index + 1] = Object.fromEntries(dimensionOrder.map(key => [key, []]));
      });

      questions.forEach(question => {
        const raw = Number(formData.get(`q${question.id}`));
        const oriented = question.positive ? raw : 6 - raw;
        facetValues[question.facet].push(oriented);
        if (question.dimension) {
          dimensionValues[question.dimension].push(oriented);
          contextValues[question.section][question.dimension].push(oriented);
        }
      });

      const dimensionScores = Object.fromEntries(dimensionOrder.map(key => [key, average(dimensionValues[key])]));
      const facetScores = Object.fromEntries(Object.keys(facets).map(key => [key, average(facetValues[key])]));
      const contextScores = Object.fromEntries(sections.map((_, index) => [
        index + 1,
        Object.fromEntries(dimensionOrder.map(key => [
          key,
          contextValues[index + 1][key].length ? average(contextValues[index + 1][key]) : null
        ]))
      ]));

      return { dimensionScores, facetScores, contextScores };
    }

    function scoreLevel(score) {
      if (score >= 4.2) return '很突出';
      if (score >= 3.6) return '较突出';
      if (score >= 2.9) return '中等';
      if (score >= 2.3) return '较收敛';
      return '很收敛';
    }

    function scoreBand(score) {
      if (score >= 3.75) return 'high';
      if (score <= 2.75) return 'low';
      return 'mid';
    }

    function interpretationFor(key, score) {
      const dimension = dimensions.find(item => item.key === key);
      return dimension.interpretations[scoreBand(score)];
    }

    function facetInterpretation(key, score) {
      const interpretation = facetInterpretations[key];
      return interpretation ? interpretation[scoreBand(score)] : '';
    }

    function stablePairKey(first, second) {
      return [first, second].sort().join('_');
    }

    function pairText(first, second) {
      const key = stablePairKey(first.key, second.key);
      return (config.pairInterpretations && config.pairInterpretations[key]) ||
        `这两个维度同时较突出时，你可能会一边运用“${first.name}”相关倾向，一边用“${second.name}”相关倾向校准行动。它们如何配合，仍要结合具体子面向与场景理解。`;
    }

    function renderRadar(dimensionScores) {
      if (!window.PrismScale || !window.PrismScale.renderResultRadar) {
        return;
      }

      window.PrismScale.renderResultRadar({
        canvasId: 'radarChart',
        labels: dimensions.map(d => d.shortName || d.name),
        values: dimensions.map(d => Number(dimensionScores[d.key].toFixed(1))),
        max: 5,
        datasetLabel: '人格倾向得分'
      });
    }

    function renderReport(data) {
      const { dimensionScores, facetScores, contextScores } = data;
      const ordered = [...dimensions].sort((a, b) => dimensionScores[b.key] - dimensionScores[a.key]);
      const top = ordered[0];
      const second = ordered[1];
      const lowest = ordered[ordered.length - 1];
      const range = dimensionScores[top.key] - dimensionScores[lowest.key];
      const profileType = range < 0.55 ? '相对均衡的多维轮廓' : `${top.name}较突出的差异化轮廓`;
      const independentFacetNote = interstitialFacet
        ? ` ${config.interstitialNote || `${interstitialFacet.name}作为独立面向另行呈现，不纳入维度平均分与雷达图。`}`
        : '';

      document.getElementById('scoreSummary').innerHTML = `
        <h2 class="result-primary-title">${profileType}</h2>
        <div class="summary-metrics summary-metrics--four">
          <div class="summary-metric">
            <span>最高维度</span>
            <strong>${top.name} ${dimensionScores[top.key].toFixed(1)}／5.0</strong>
          </div>
          <div class="summary-metric">
            <span>次高维度</span>
            <strong>${second.name} ${dimensionScores[second.key].toFixed(1)}／5.0</strong>
          </div>
          <div class="summary-metric">
            <span>最低维度</span>
            <strong>${lowest.name} ${dimensionScores[lowest.key].toFixed(1)}／5.0</strong>
          </div>
          <div class="summary-metric">
            <span>维度极差</span>
            <strong>${range.toFixed(1)} 分</strong>
          </div>
        </div>`;

      document.getElementById('typeJudgment').innerHTML = `
        <p class="result-lead">你的总体轮廓以<strong>${top.name}</strong>为相对突出方向，<strong>${second.name}</strong>次之；${lowest.name}相对收敛。各维度的高低仅描述本次作答中的倾向强弱，不代表人格优劣、能力高低或固定类型。${independentFacetNote}</p>`;
      document.getElementById('currentProfileAnalysis').innerHTML = `
        <div class="insight-card"><h3>当前画像与阅读边界</h3>
          <p><strong>建议顺序：</strong>先看总体维度，再看各子面向，最后用生活情境检查这些倾向何时稳定、何时变化。</p>
          <p><strong>结果边界：</strong>“${profileType}”只是本次作答的阅读提示，不是固定人格类型；近期压力、角色要求、安全感和精力都可能改变具体表现。</p>
          <p><strong>分数边界：</strong>本页只计算原始平均分，没有常模、百分位或诊断阈值，不适合用于招聘筛选或临床判断。</p>
          <div class="result-profile-tags">${dimensions.map(dimension => `<span class="result-profile-tag">${dimension.name} ${dimensionScores[dimension.key].toFixed(1)}</span>`).join('')}</div>
        </div>`;
      document.getElementById('mainInterpretation').innerHTML = `
        <h3>两个相对突出维度如何相互作用</h3>
        <div class="insight-card personality-combination-card ${classPrefix}-combination-card">
          <p><strong>${top.name} × ${second.name}：</strong>${pairText(top, second)}</p>
          <p><strong>组合不等于类型：</strong>具体表现仍取决于各子面向、角色与处境。可以回想一次两种倾向彼此支持的场景，也回想一次它们发生拉扯的场景。</p>
        </div>`;

      const detailCards = dimensions.map((dimension, index) => {
        const dimensionScore = dimensionScores[dimension.key];
        const facetCards = facetKeysByDimension[dimension.key].map(key => {
          const facet = facets[key];
          const facetScore = facetScores[key];
          return `<div class="personality-facet-detail ${classPrefix}-facet-detail">
            <div class="personality-facet-detail-head ${classPrefix}-facet-detail-head"><strong>${facet.name}</strong><span>${facetScore.toFixed(1)}／5.0 · ${scoreLevel(facetScore)}</span></div>
            <p>${facetInterpretation(key, facetScore)}</p>
            <p class="personality-facet-calibration ${classPrefix}-facet-calibration"><strong>校准提醒：</strong>${facet.observe}</p>
          </div>`;
        }).join('');
        const pattern = config.dimensionPatterns[dimension.key];
        return `<div class="insight-card personality-dimension-detail ${classPrefix}-dimension-detail">
          <h3>${index + 1}、${dimension.name}：${scoreLevel(dimensionScore)}</h3>
          <p><strong>当前得分：</strong>${dimensionScore.toFixed(1)}／5.0。${interpretationFor(dimension.key, dimensionScore)}</p>
          <p><strong>在合适情境中可能表现为：</strong>${pattern.help}</p>
          <p><strong>使用过度或情境不合时：</strong>${pattern.watch}</p>
          <h4>${facetKeysByDimension[dimension.key].length} 个子面向逐项解读</h4>
          <div class="personality-facet-detail-grid ${classPrefix}-facet-detail-grid">${facetCards}</div>
          <p class="personality-dimension-reflection ${classPrefix}-dimension-reflection"><strong>进一步观察：</strong>${dimension.reflection}</p>
        </div>`;
      }).join('');

      const interstitialCard = interstitialFacet ? `<div class="insight-card personality-dimension-detail ${classPrefix}-dimension-detail">
        <h3>${interstitialFacet.name}：${scoreLevel(facetScores[interstitialFacetKey])}</h3>
        <p><strong>当前得分：</strong>${facetScores[interstitialFacetKey].toFixed(1)}／5.0。${facetInterpretation(interstitialFacetKey, facetScores[interstitialFacetKey])}</p>
        <p><strong>独立计分说明：</strong>${config.interstitialNote}</p>
        <p class="personality-dimension-reflection ${classPrefix}-dimension-reflection"><strong>进一步观察：</strong>${interstitialFacet.observe}</p>
      </div>` : '';
      document.getElementById('deepPersonalAnalysis').innerHTML = `<h3>维度与子面向深度解读</h3>${detailCards}${interstitialCard}`;

      const contextCards = sections.map((section, index) => {
        const values = dimensions.map(dimension => ({
          ...dimension,
          score: contextScores[index + 1][dimension.key]
        })).filter(item => item.score !== null).sort((a, b) => b.score - a.score);
        return `<div class="personality-context-card ${classPrefix}-context-card"><h4>${section.title}</h4>
          <p>${section.description}</p>
          <p><strong>本组相对突出：</strong>${values.slice(0, 2).map(item => `${item.name} ${item.score.toFixed(1)}`).join('、')}。</p>
          <p class="result-data-note">本组题量有限，只用于回想场景差异，不作为独立分量表。</p>
        </div>`;
      }).join('');
      document.getElementById('sectionScores').innerHTML = `
        <h3>${config.sectionResultTitle || `${sections.length} 个作答组的校准线索`}</h3>
        <p class="result-data-note personality-context-note">同一种人格倾向可能随角色、熟悉度、压力与安全感改变。下面呈现各组的相对重心，不替代总体维度分数。</p>
        <div class="personality-context-grid ${classPrefix}-context-grid">${contextCards}</div>`;

      const domainFacetKeys = Object.keys(facets).filter(key => key !== interstitialFacetKey);
      const orderedFacets = domainFacetKeys.sort((a, b) => facetScores[b] - facetScores[a]);
      const highFacet = facets[orderedFacets[0]];
      const lowFacet = facets[orderedFacets[orderedFacets.length - 1]];
      const contextRanges = Object.fromEntries(dimensions.map(dimension => {
        const values = sections.map((_, index) => contextScores[index + 1][dimension.key]).filter(value => value !== null);
        return [dimension.key, Math.max(...values) - Math.min(...values)];
      }));
      const mostVariable = [...dimensions].sort((a, b) => contextRanges[b.key] - contextRanges[a.key])[0];
      document.getElementById('personalizedSuggestions').innerHTML = `
        <h3>深度反思与行动建议</h3>
        <div class="action-box" style="margin-top:0">
          <p style="margin-top:0"><strong>1. 回看相对突出的子面向</strong><br>记录“${highFacet.name}”最近一次帮助你的场景，也记录一次它使用过度、反而增加成本的场景。</p>
          <p><strong>2. 重新理解相对收敛的子面向</strong><br>“${lowFacet.name}”较低可能反映偏好、精力分配或环境限制，不需要立刻把它理解成缺点。</p>
          <p><strong>3. 观察情境波动</strong><br>“${mostVariable.name}”在各组情境中的差距相对更明显（约 ${contextRanges[mostVariable.key].toFixed(1)} 分）。比较高低场景中谁在场、你承担什么角色、身体状态如何。</p>
          <p><strong>4. 区分偏好与困扰</strong><br>只有当某种模式持续缩小选择、损害关系或造成明显痛苦时，才值得进一步寻找专业或社会支持。</p>
          <p><strong>5. 在合适时机重测</strong><br>若近期处在高压、失眠或重大变化中，可在更稳定阶段重新作答，比较模式而不是追求固定分数。</p>
        </div>`;
      renderRadar(dimensionScores);
    }

    function calculateResult() {
      if (!form.reportValidity()) {
        const firstEmpty = form.querySelector('select:invalid');
        if (firstEmpty) firstEmpty.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      const data = calculateScores(new FormData(form));
      renderReport(data);
      result.style.display = 'block';
      result.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.__prismPersonalityResult = data;
    }

    function resetScale() {
      if (!window.confirm('确定要清空本页全部答案和结果吗？')) return;
      form.reset();
      localStorage.removeItem(storageKey);
      result.style.display = 'none';
      window.__prismPersonalityResult = null;
      updateProgress();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function resultText() {
      const data = window.__prismPersonalityResult;
      if (!data) return '';
      const lines = [config.reportTitle, ''];
      dimensions.forEach(dimension => {
        lines.push(`${dimension.name}：${data.dimensionScores[dimension.key].toFixed(2)}／5.00`);
        facetKeysByDimension[dimension.key].forEach(key => {
          lines.push(`  - ${facets[key].name}：${data.facetScores[key].toFixed(2)}`);
        });
      });
      if (interstitialFacet) {
        lines.push(`${interstitialFacet.name}（独立面向）：${data.facetScores[interstitialFacetKey].toFixed(2)}／5.00`);
      }
      lines.push('', '说明：本结果为原创自我探索工具的原始平均分，不是常模、诊断或固定人格类型。');
      return lines.join('\n');
    }

    async function exportResults(format) {
      if (!window.__prismPersonalityResult) {
        window.alert('请先完成量表并生成结果。');
        return;
      }
      const textContent = resultText();
      if (format === 'text') {
        const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${config.fileBaseName || 'personality-scale'}-result.txt`;
        link.click();
        URL.revokeObjectURL(link.href);
        return;
      }
      exportImage(textContent);
    }

    function exportImage(textContent) {
      const lines = textContent.split('\n');
      const canvas = document.createElement('canvas');
      const width = 1080;
      const padding = 72;
      const lineHeight = 34;
      canvas.width = width;
      canvas.height = Math.max(720, padding * 2 + lines.length * lineHeight + 80);
      const context = canvas.getContext('2d');
      context.fillStyle = '#f8fafc';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = '#4f46e5';
      context.fillRect(0, 0, canvas.width, 18);
      context.fillStyle = '#111827';
      context.font = '24px system-ui, sans-serif';
      let y = padding;
      lines.forEach((line, index) => {
        if (index === 0) {
          context.font = 'bold 34px system-ui, sans-serif';
          context.fillStyle = '#312e81';
        } else {
          context.font = '24px system-ui, sans-serif';
          context.fillStyle = '#1f2937';
        }
        context.fillText(line, padding, y, width - padding * 2);
        y += lineHeight;
      });
      context.font = '20px system-ui, sans-serif';
      context.fillStyle = '#64748b';
      context.fillText('PrismSelf · 数据仅在本地处理', padding, canvas.height - 42);
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `${config.fileBaseName || 'personality-scale'}-result.png`;
      link.click();
    }

    window.calculateResult = calculateResult;
    window.resetScale = resetScale;
    window.exportResults = exportResults;
    window.resetForm = resetScale;
    window.saveResultText = () => exportResults('text');
    window.saveResultImage = () => exportResults('image');
    renderQuestions();
    restoreAnswers();
    form.addEventListener('change', saveAnswers);
  }

  window.PrismPersonalityScale = { create };
})();
