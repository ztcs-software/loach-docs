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
    const isFeaturePage = /\/features\/[^/]+\.html$/.test(window.location.pathname.replace(/\\/g, '/'));
    document.querySelectorAll('.sidebar-link, .sidebar-sublink').forEach(function (link) {
      const href = link.getAttribute('href').split('/').pop();
      if (href === path) link.classList.add('active');
    });

    // ---------- Collapsible sidebar groups ----------
    const GROUP_KEY = 'loach-docs-sidebar-groups';
    let groupState = {};
    try { groupState = JSON.parse(localStorage.getItem(GROUP_KEY) || '{}') || {}; } catch (_) { groupState = {}; }

    document.querySelectorAll('.sidebar-group').forEach(function (group) {
      const id = group.dataset.group || '';
      const toggle = group.querySelector('.sidebar-group-toggle');
      const submenu = group.querySelector('.sidebar-submenu');
      if (!toggle || !submenu) return;

      const hasActiveChild = !!submenu.querySelector('.sidebar-sublink.active');
      const stored = Object.prototype.hasOwnProperty.call(groupState, id) ? !!groupState[id] : null;

      // Auto-open if on a feature page or a sublink is active; else fall back to stored state.
      let open = hasActiveChild || (id === 'features' && isFeaturePage);
      if (!open && stored !== null) open = stored;

      group.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');

      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const nowOpen = !group.classList.contains('open');
        group.classList.toggle('open', nowOpen);
        toggle.setAttribute('aria-expanded', nowOpen ? 'true' : 'false');
        if (id) {
          groupState[id] = nowOpen;
          try { localStorage.setItem(GROUP_KEY, JSON.stringify(groupState)); } catch (_) {}
        }
      });
    });

    // Close mobile sidebar when a sublink is tapped too
    document.querySelectorAll('.sidebar-sublink').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 980) closeSidebar();
      });
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

    // ---------- Search: keyboard shortcut + mobile overlay ----------
    const searchInput = document.querySelector('.search-input');
    const topbar = document.querySelector('.topbar');
    const searchBtn = document.querySelector('.search-btn');
    const searchClose = document.querySelector('.search-close');

    function openMobileSearch() {
      if (!topbar) return;
      topbar.classList.add('search-open');
      if (searchInput) {
        // Wait for layout so focus/keyboard appears reliably on mobile
        setTimeout(function () { searchInput.focus(); }, 0);
      }
    }
    function closeMobileSearch() {
      if (!topbar) return;
      topbar.classList.remove('search-open');
      if (searchInput) {
        searchInput.value = '';
        searchInput.blur();
        searchInput.dispatchEvent(new Event('input'));
      }
    }

    if (searchBtn) searchBtn.addEventListener('click', openMobileSearch);
    if (searchClose) searchClose.addEventListener('click', closeMobileSearch);

    document.addEventListener('keydown', function (e) {
      const mod = e.ctrlKey || e.metaKey;
      if (mod && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (window.innerWidth <= 640) openMobileSearch();
        else if (searchInput) searchInput.focus();
      }
      if (e.key === 'Escape') {
        if (topbar && topbar.classList.contains('search-open')) {
          closeMobileSearch();
        } else if (document.activeElement === searchInput) {
          searchInput.blur();
        }
      }
    });

    // If the viewport grows past mobile while the overlay is open, drop the state
    window.addEventListener('resize', function () {
      if (window.innerWidth > 640 && topbar && topbar.classList.contains('search-open')) {
        topbar.classList.remove('search-open');
      }
    });
  });
})();
