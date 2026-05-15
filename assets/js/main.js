(function () {
  'use strict';

  // ---------- Theme ----------
  const THEME_KEY = 'loach-docs-theme';
  const root = document.documentElement;

  function getInitialTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function setActiveThemeOption(theme) {
    document.querySelectorAll('.theme-toggle-opt').forEach(function (b) {
      b.classList.toggle('active', b.dataset.themeSet === theme);
    });
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    setActiveThemeOption(theme);
  }

  applyTheme(getInitialTheme());

  document.addEventListener('DOMContentLoaded', function () {
    setActiveThemeOption(root.getAttribute('data-theme') || 'light');
    document.querySelectorAll('.theme-toggle-opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyTheme(this.dataset.themeSet);
      });
    });

    // ---------- Mobile sidebar ----------
    const sidebar = document.querySelector('.sidebar');
    const menuBtn = document.querySelector('.menu-btn');
    const overlay = document.querySelector('.sidebar-overlay');

    function closeSidebar() {
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
    }
    function openSidebar() {
      if (sidebar) sidebar.classList.add('open');
      if (overlay) overlay.classList.add('open');
    }
    if (menuBtn) {
      menuBtn.addEventListener('click', function () {
        if (sidebar && sidebar.classList.contains('open')) closeSidebar();
        else openSidebar();
      });
    }
    if (overlay) overlay.addEventListener('click', closeSidebar);

    // Close sidebar on link click (mobile)
    document.querySelectorAll('.sidebar-link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 980) closeSidebar();
      });
    });

    // ---------- Active sidebar link ----------
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.sidebar-link').forEach(function (link) {
      const href = link.getAttribute('href').split('/').pop();
      if (href === path) link.classList.add('active');
    });

    // ---------- Site switcher dropdown ----------
    const switcher = document.querySelector('.site-switcher');
    if (switcher) {
      const btn = switcher.querySelector('.site-switcher-btn');
      function closeSwitcher() {
        switcher.classList.remove('open');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = switcher.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
      document.addEventListener('click', function (e) {
        if (!e.target.closest('.site-switcher')) closeSwitcher();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeSwitcher();
      });
    }

    // ---------- On-this-page TOC ----------
    (function buildToc() {
      const content = document.querySelector('.content');
      if (!content) return;
      const headings = Array.from(content.querySelectorAll('h2[id], h3[id]'));
      if (headings.length < 2) return;

      const toc = document.createElement('aside');
      toc.className = 'toc';
      const title = document.createElement('div');
      title.className = 'toc-title';
      title.textContent = 'On this page';
      toc.appendChild(title);

      const list = document.createElement('ul');
      list.className = 'toc-list';
      let currentH2Sub = null;

      headings.forEach(function (h) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent.trim();
        a.className = 'toc-link';
        a.dataset.target = h.id;
        li.appendChild(a);

        if (h.tagName === 'H2') {
          list.appendChild(li);
          currentH2Sub = null;
        } else if (h.tagName === 'H3') {
          if (!currentH2Sub) {
            const lastLi = list.lastElementChild;
            if (lastLi) {
              currentH2Sub = document.createElement('ul');
              lastLi.appendChild(currentH2Sub);
            } else {
              list.appendChild(li);
              return;
            }
          }
          currentH2Sub.appendChild(li);
        }
      });

      toc.appendChild(list);
      content.parentNode.appendChild(toc);

      // Scrollspy: highlight the heading nearest the top of the viewport
      const links = Array.from(toc.querySelectorAll('.toc-link'));
      let ticking = false;
      function update() {
        ticking = false;
        const scrollLine = (parseInt(getComputedStyle(document.documentElement).scrollPaddingTop, 10) || 80) + 20;
        let activeId = headings[0].id;
        for (let i = 0; i < headings.length; i++) {
          const top = headings[i].getBoundingClientRect().top;
          if (top - scrollLine <= 0) activeId = headings[i].id;
          else break;
        }
        // If user is at the very bottom, prefer last heading
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
          activeId = headings[headings.length - 1].id;
        }
        links.forEach(function (l) {
          l.classList.toggle('active', l.dataset.target === activeId);
        });
      }
      function onScroll() {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      update();
    })();

    // ---------- Search keyboard shortcut ----------
    const searchInput = document.querySelector('.search-input');
    document.addEventListener('keydown', function (e) {
      const mod = e.ctrlKey || e.metaKey;
      if (mod && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (searchInput) searchInput.focus();
      }
      if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.blur();
      }
    });
  });
})();
