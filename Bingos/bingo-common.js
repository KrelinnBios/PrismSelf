// 共鸣刻度卡共享逻辑：渲染板块、切换刻度、统计共鸣强度，并把选择保存在本机。
(function () {
  const LEVELS = [0, 25, 50, 75, 100];

  function normalizeLevel(value) {
    const level = parseInt(value, 10);
    return LEVELS.includes(level) ? level : 0;
  }

  // 下一等级 (0→25→50→75→100→0)，reverse 为 true 时反向
  function stepLevel(current, reverse) {
    const idx = LEVELS.indexOf(current);
    const offset = reverse ? LEVELS.length - 1 : 1;
    return LEVELS[(Math.max(idx, 0) + offset) % LEVELS.length];
  }

  // 以第一个空格为界，分离 Emoji 和纯文本
  function splitItem(rawText) {
    const spaceIndex = rawText.indexOf(' ');
    if (spaceIndex === -1) {
      return { emoji: rawText.slice(0, 2), text: rawText.slice(2) };
    }
    return {
      emoji: rawText.slice(0, spaceIndex).trim(),
      text: rawText.slice(spaceIndex + 1).trim()
    };
  }

  function init({ storageKey, sections, items }) {
    const container = document.getElementById('sections-container');
    const resetBtn = document.getElementById('resetBtn');
    if (!container) return;

    const sectionCells = {};
    const statsElements = {};

    function loadSaved() {
      try {
        const saved = JSON.parse(localStorage.getItem(storageKey));
        return saved && typeof saved === 'object' ? saved : {};
      } catch (error) {
        return {};
      }
    }

    function save() {
      const data = {};
      let hasAny = false;
      sections.forEach(({ id }) => {
        data[id] = sectionCells[id].map((cell) => {
          const level = normalizeLevel(cell.dataset.level);
          if (level) hasAny = true;
          return level;
        });
      });
      try {
        if (hasAny) localStorage.setItem(storageKey, JSON.stringify(data));
        else localStorage.removeItem(storageKey);
      } catch (error) {
        // 隐私模式或存储被禁用时，刻度仍可正常使用，只是不会保存
      }
    }

    function updateSectionStats(sectionId) {
      const cells = sectionCells[sectionId];
      if (!cells || cells.length === 0) return;
      const total = cells.reduce((sum, cell) => sum + normalizeLevel(cell.dataset.level), 0);
      const percent = Math.round(total / cells.length);
      if (statsElements[sectionId]) statsElements[sectionId].textContent = percent;
    }

    function setLevel(cell, level) {
      cell.dataset.level = String(level);
      const ring = cell.querySelector('.ring');
      if (ring) ring.setAttribute('data-label', level === 0 ? '0' : `${level}%`);
      cell.setAttribute('aria-label', `${cell.dataset.text}，当前共鸣 ${level}%`);
    }

    function cycleCell(cell, reverse) {
      setLevel(cell, stepLevel(normalizeLevel(cell.dataset.level), reverse));
      updateSectionStats(cell.dataset.section);
      save();
    }

    const saved = loadSaved();
    container.innerHTML = '';

    sections.forEach(({ id, title, subtitle, colorClass }) => {
      const itemsList = items[id];
      if (!itemsList) return;
      const savedLevels = Array.isArray(saved[id]) ? saved[id] : [];
      sectionCells[id] = [];

      const section = document.createElement('section');
      section.className = `section ${colorClass}`;
      section.setAttribute('aria-labelledby', `sec-title-${id}`);
      section.innerHTML = `
        <div class="sec-head">
          <div class="sec-badge" aria-hidden="true">${id}</div>
          <div class="sec-info">
            <h2 id="sec-title-${id}">${title}</h2>
            <p>${subtitle}</p>
          </div>
          <div class="sec-stats">
            <span>板块共鸣</span>
            <span class="sec-ratio" id="stats-${id}">0</span><small>%</small>
          </div>
        </div>
      `;

      const grid = document.createElement('div');
      grid.className = 'grid';

      itemsList.forEach((rawText, index) => {
        const { emoji, text } = splitItem(rawText);
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.setAttribute('role', 'button');
        cell.tabIndex = 0;
        cell.dataset.section = id;
        cell.dataset.text = text;
        cell.innerHTML = `
          <div class="ring" aria-hidden="true"></div>
          <div class="cell-icon" aria-hidden="true">${emoji}</div>
          <div class="cell-text">${text}</div>
        `;
        setLevel(cell, normalizeLevel(savedLevels[index]));
        grid.appendChild(cell);
        sectionCells[id].push(cell);
      });

      section.appendChild(grid);
      container.appendChild(section);
      statsElements[id] = document.getElementById(`stats-${id}`);
      updateSectionStats(id);
    });

    // Shift + 点击或 Shift + Enter 可以反向调回上一档
    container.addEventListener('click', (event) => {
      const cell = event.target.closest('.cell');
      if (cell) cycleCell(cell, event.shiftKey);
    });

    container.addEventListener('keydown', (event) => {
      const cell = event.target.closest('.cell');
      if (!cell) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        cycleCell(cell, event.shiftKey);
      } else if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();
        setLevel(cell, 0);
        updateSectionStats(cell.dataset.section);
        save();
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const hasAny = sections.some(({ id }) =>
          sectionCells[id].some((cell) => normalizeLevel(cell.dataset.level) > 0)
        );
        if (hasAny && !window.confirm('确定把全部格子归零吗？此操作无法撤销。')) return;
        sections.forEach(({ id }) => {
          sectionCells[id].forEach((cell) => setLevel(cell, 0));
          updateSectionStats(id);
        });
        save();
      });
    }
  }

  window.PrismBingo = { init };
})();
