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

    function matchesTerm(term, query) {
      if (!query) return true;
      const haystack = `${term.zh} ${term.en || ""} ${term.aliases || ""} ${term.desc} ${term.note}`.toLowerCase();
      return haystack.includes(query);
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

    function matchRank(term, query) {
      if (!query) return 999;
      const q = query;
      const prepared = prepareTerm(term);
      const zh = normalize(prepared.zh);
      const en = normalize(prepared.en);
      const aliases = prepared.aliasesList.map((item) => normalize(item));
      const desc = normalize(term.desc);
      const note = normalize(term.note);

      if (zh === q || en === q || aliases.includes(q)) return 0;
      if (zh.startsWith(q) || en.startsWith(q) || aliases.some((item) => item.startsWith(q))) return 1;
      if (zh.includes(q) || en.includes(q) || aliases.some((item) => item.includes(q))) return 2;
      if (`${desc} ${note}`.includes(q)) return 3;
      return 9;
    }

    function render() {
      const query = normalize(searchInput.value);
      const visible = terms
        .map((term, index) => ({ term, index }))
        .filter(({ term }) => {
          const inCategory = currentFilter === "all" || term.cat === currentFilter;
          return inCategory && matchesTerm(term, query);
        });

      if (query) {
        visible.sort((a, b) => {
          const rankDiff = matchRank(a.term, query) - matchRank(b.term, query);
          if (rankDiff) return rankDiff;
          return a.index - b.index;
        });
      }

      grid.innerHTML = visible.map(({ term }) => {
        const prepared = prepareTerm(term);
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

      const intro = categoryIntros[currentFilter] || "";
      categoryIntro.hidden = !intro;
      if (intro) categoryIntro.innerHTML = `<b>${categoryNames[currentFilter]}</b>：${intro}`;

      resultCount.textContent = `${visible.length} 个结果`;
      emptyState.style.display = visible.length ? "none" : "block";
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
