(function () {
  'use strict';

  let INDEX = null;
  let activeIdx = -1;
  let visibleResults = [];

  function getBasePath() {
    // Determine "../" prefix needed to reach the site root from the current page.
    // Root index → '', /pages/<x>.html → '../', /pages/features/<x>.html → '../../'.
    const path = window.location.pathname.replace(/\\/g, '/');
    if (/\/pages\/[^/]+\/[^/]+\.html?$/.test(path)) return '../../';
    if (path.indexOf('/pages/') !== -1) return '../';
    return '';
  }

  function loadIndex() {
    // Index is embedded by assets/js/search-index.js (so it works over file:// too).
    INDEX = Array.isArray(window.LOACH_SEARCH_INDEX) ? window.LOACH_SEARCH_INDEX : [];
  }

  function normalize(s) {
    return (s || '').toLowerCase();
  }

  function score(entry, q) {
    const title = normalize(entry.title);
    const heading = normalize(entry.heading || '');
    const body = normalize(entry.body);
    let s = 0;
    if (title.indexOf(q) !== -1) s += 10;
    if (title.indexOf(q) === 0) s += 5;
    if (heading.indexOf(q) !== -1) s += 6;
    if (body.indexOf(q) !== -1) s += 1;
    return s;
  }

  function highlight(text, q) {
    if (!q) return escapeHtml(text);
    const lower = text.toLowerCase();
    const idx = lower.indexOf(q);
    if (idx === -1) return escapeHtml(text);
    const start = Math.max(0, idx - 30);
    const end = Math.min(text.length, idx + q.length + 80);
    const snippet = text.slice(start, end);
    const prefix = start > 0 ? '…' : '';
    const suffix = end < text.length ? '…' : '';

    // Walk the snippet by query-length matches on the lowercased copy, so we mark
    // the original text (not its HTML-escaped form). Avoids <mark> tags ending up
    // inside an HTML entity (e.g. &lt;) when the query overlaps with one.
    const lowerSnip = snippet.toLowerCase();
    let out = '';
    let i = 0;
    while (i < snippet.length) {
      const hit = lowerSnip.indexOf(q, i);
      if (hit === -1) {
        out += escapeHtml(snippet.slice(i));
        break;
      }
      out += escapeHtml(snippet.slice(i, hit));
      out += '<mark>' + escapeHtml(snippet.slice(hit, hit + q.length)) + '</mark>';
      i = hit + q.length;
    }
    return prefix + out + suffix;
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  function render(results, q, container) {
    if (!results.length) {
      container.innerHTML = '<div class="search-empty">No results for "' + escapeHtml(q) + '"</div>';
      container.classList.add('open');
      return;
    }
    const base = getBasePath();
    container.innerHTML = results.map(function (r, i) {
      const url = base + r.url + (r.anchor ? '#' + r.anchor : '');
      const titleHtml = r.heading
        ? highlight(r.heading, q)
        : highlight(r.title, q);
      return '<a class="search-result' + (i === activeIdx ? ' active' : '') + '" href="' + url + '" data-idx="' + i + '">' +
        '<div class="search-result-page">' + escapeHtml(r.title) + '</div>' +
        '<div class="search-result-title">' + titleHtml + '</div>' +
        '<div class="search-result-snippet">' + highlight(r.body, q) + '</div>' +
        '</a>';
    }).join('');
    container.classList.add('open');
  }

  function search(q) {
    if (!INDEX || !q) return [];
    const nq = normalize(q.trim());
    if (nq.length < 2) return [];
    const scored = INDEX
      .map(function (e) { return { entry: e, s: score(e, nq) }; })
      .filter(function (x) { return x.s > 0; })
      .sort(function (a, b) { return b.s - a.s; })
      .slice(0, 10)
      .map(function (x) { return x.entry; });
    return scored;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('.search-input');
    const results = document.querySelector('.search-results');
    if (!input || !results) return;

    loadIndex();

    function update() {
      const q = input.value.trim();
      if (!q) {
        results.classList.remove('open');
        results.innerHTML = '';
        visibleResults = [];
        activeIdx = -1;
        return;
      }
      visibleResults = search(q);
      activeIdx = -1;
      render(visibleResults, q, results);
    }

    input.addEventListener('input', update);
    input.addEventListener('focus', function () {
      if (input.value.trim()) update();
    });

    input.addEventListener('keydown', function (e) {
      if (!results.classList.contains('open')) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIdx = Math.min(activeIdx + 1, visibleResults.length - 1);
        render(visibleResults, input.value.trim(), results);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIdx = Math.max(activeIdx - 1, 0);
        render(visibleResults, input.value.trim(), results);
      } else if (e.key === 'Enter') {
        if (activeIdx >= 0 && visibleResults[activeIdx]) {
          e.preventDefault();
          const r = visibleResults[activeIdx];
          window.location.href = getBasePath() + r.url + (r.anchor ? '#' + r.anchor : '');
        }
      }
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.search-wrap')) {
        results.classList.remove('open');
      }
    });
  });
})();
