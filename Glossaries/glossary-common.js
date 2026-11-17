// 术语页共享逻辑：分类筛选、中英文与别名搜索、按匹配度排序，并渲染术语卡片。
(function () {
  function init({ categoryNames, terms, categoryIntros }) {
    const searchInput = document.getElementById("searchInput");
    const grid = document.getElementById("termGrid");
    const categoryIntro = document.getElementById("categoryIntro");
    const emptyState = document.getElementById("emptyState");
    const resultCount = document.getElementById("resultCount");
    const termCount = document.getElementById("termCount");
    const filterButtons = Array.from(document.querySelectorAll(".filter"));
    let currentFilter = "all";

    function normalize(value) {
      return String(value || "").toLowerCase().trim();
    }

    function splitAliases(value) {
      return String(value || "")
        .split(/[、，,;/]/)
        .map((part) => part.trim())
        .filter(Boolean);
    }

    function prepareTerm(term) {
      const seen = new Set();
      const aliasesList = splitAliases(term.aliases).filter((item) => {
        const key = normalize(item);
        if (!key || key === normalize(term.zh) || key === normalize(term.en) || seen.has(key)) return false;
        seen.add(key);
        return true;
      });

      return {
        ...term,
        aliasesList
      };
    }

    function matchRank(entry, query) {
      if (!query) return 999;
      const q = query;
      const { zh, en, aliases, description } = entry;

      if (zh === q || en === q || aliases.includes(q)) return 0;
      if (zh.startsWith(q) || en.startsWith(q) || aliases.some((item) => item.startsWith(q))) return 1;
      if (zh.includes(q) || en.includes(q) || aliases.some((item) => item.includes(q))) return 2;
      if (description.includes(q)) return 3;
      return 9;
    }

    // 数据预处理与卡片创建只做一次；搜索时保留已有节点和原始排序。
    const entries = terms.map((term, index) => {
      const prepared = prepareTerm(term);
      return {
        term: prepared,
        index,
        zh: normalize(term.zh),
        en: normalize(term.en),
        aliases: prepared.aliasesList.map(normalize),
        description: `${normalize(term.desc)} ${normalize(term.note)}`,
        haystack: `${term.zh} ${term.en || ""} ${term.aliases || ""} ${term.desc} ${term.note}`.toLowerCase()
      };
    });
    grid.innerHTML = entries.map(({ term: prepared }) => {
      const tagKey = prepared.cardTag || prepared.cat;
      const tagName = prepared.tag || categoryNames[tagKey] || categoryNames[prepared.cat] || "术语";
      return `
        <article class="term-card" data-category="${prepared.cat}">
          <div class="term-head">
            <h3 class="term-title">${prepared.zh}${prepared.en ? `<small>${prepared.en}</small>` : ""}</h3>
            <span class="tag ${tagKey}">${tagName}</span>
          </div>
          ${prepared.aliasesList.length ? `<div class="aliases">别名/又译/近译：${prepared.aliasesList.join("、")}</div>` : ""}
          <p class="term-body">${prepared.desc}</p>
          <div class="note">${prepared.note}</div>
        </article>
      `;
    }).join("");
    Array.from(grid.children).forEach((card, index) => { entries[index].card = card; });
    let renderedQuery = null;
    let renderedFilter = null;

    function render() {
      const query = normalize(searchInput.value);
      if (query === renderedQuery && currentFilter === renderedFilter) return;
      const visible = entries
        .filter(({ term, haystack }) =>
          (currentFilter === "all" || term.cat === currentFilter) && (!query || haystack.includes(query)))
        .map((entry) => ({ entry, rank: matchRank(entry, query) }));
      if (query) visible.sort((a, b) => a.rank - b.rank || a.entry.index - b.entry.index);

      const visibleCards = new Set(visible.map(({ entry }) => entry.card));
      Array.from(grid.children).forEach((card) => {
        if (!visibleCards.has(card)) card.remove();
      });
      let nextCard = grid.firstElementChild;
      visible.forEach(({ entry }) => {
        if (entry.card === nextCard) nextCard = nextCard.nextElementSibling;
        else grid.insertBefore(entry.card, nextCard);
      });

      if (currentFilter !== renderedFilter) {
        const intro = categoryIntros[currentFilter] || "";
        categoryIntro.hidden = !intro;
        if (intro) categoryIntro.innerHTML = `<b>${categoryNames[currentFilter]}</b>：${intro}`;
      }

      const countText = `${visible.length} 个结果`;
      if (resultCount.textContent !== countText) resultCount.textContent = countText;
      emptyState.style.display = visible.length ? "none" : "block";
      renderedQuery = query;
      renderedFilter = currentFilter;
    }

    termCount.textContent = String(terms.length);
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;
        filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        render();
      });
    });
    searchInput.addEventListener("input", render);
    render();
  }

  window.PrismSelfGlossary = { init };
})();
