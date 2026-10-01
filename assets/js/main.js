(function () {
  'use strict';

  // ---------- Version ----------
  // Bump this when shipping a meaningful docs update. The footer pulls from it
  // on every page, so one edit here updates every HTML file.
  const LOACH_DOCS_VERSION = 'v1.5.0';

  // ---------- Theme ----------
  // The initial data-theme attribute is set by the inline bootstrap in each page's <head>,
  // so there's no flash on load. This block keeps localStorage and the button states in sync.
  const THEME_KEY = 'loach-docs-theme';
  const root = document.documentElement;

  function getInitialTheme() {
    const attr = root.getAttribute('data-theme');
    if (attr === 'light' || attr === 'dark') return attr;
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function setActiveThemeOption(theme) {
    document.querySelectorAll('.theme-toggle-opt').forEach(function (b) {
      const isActive = b.dataset.themeSet === theme;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (_) {}
    setActiveThemeOption(theme);
  }

  applyTheme(getInitialTheme());

  // ---------- Sidebar scroll persistence ----------
  // Preserve the menu scroll position across navigation so it doesn't jump back
  // to the top whenever you click a link. The script tag is at the end of <body>,
  // so .sidebar exists, but its layout hasn't necessarily been computed yet -
  // setting scrollTop before layout has no effect (the value is clamped to 0).
  // We force a layout flush by reading scrollHeight first, and we re-apply on
  // DOMContentLoaded as a belt-and-braces fallback.
  const SIDEBAR_SCROLL_KEY = 'loach-docs-sidebar-scroll';
  const sidebarForScroll = document.querySelector('.sidebar');
  function restoreSidebarScroll() {
    if (!sidebarForScroll) return;
    try {
      const stored = sessionStorage.getItem(SIDEBAR_SCROLL_KEY);
      if (stored === null) return;
      const v = parseInt(stored, 10);
      if (!isFinite(v)) return;
      // Force layout so scrollHeight is computed, otherwise scrollTop is clamped to 0.
      void sidebarForScroll.scrollHeight;
      sidebarForScroll.scrollTop = v;
    } catch (_) {}
  }
  restoreSidebarScroll();

  if (sidebarForScroll) {
    let scrollTicking = false;
    sidebarForScroll.addEventListener('scroll', function () {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(function () {
        scrollTicking = false;
        try {
          sessionStorage.setItem(SIDEBAR_SCROLL_KEY, String(sidebarForScroll.scrollTop));
        } catch (_) {}
      });
    }, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // ---------- Footer year + version ----------
    document.querySelectorAll('.footer-year').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
    document.querySelectorAll('.footer-version').forEach(function (el) {
      el.textContent = LOACH_DOCS_VERSION;
    });

    // Per-button handler: clicking a button sets THAT theme, instead of always toggling.
    // (The previous behaviour flipped the theme even when the user clicked the already-active option.)
    document.querySelectorAll('.theme-toggle-opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const target = btn.dataset.themeSet === 'dark' ? 'dark' : 'light';
        applyTheme(target);
      });
    });

    // ---------- Sidebar: active link ----------
    const sidebar = document.querySelector('.sidebar');
    const menuBtn = document.querySelector('.menu-btn');
    const overlay = document.querySelector('.sidebar-overlay');
    const MOBILE_MAX = 980; // matches the drawer breakpoint in styles.css

    const here = window.location.href;
    const herePath = window.location.pathname.replace(/\\/g, '/');
    document.querySelectorAll('.sidebar-link[href], .sidebar-sublink[href]').forEach(function (link) {
      try {
        const resolved = new URL(link.getAttribute('href'), here).pathname.replace(/\\/g, '/');
        if (resolved === herePath) link.classList.add('active');
      } catch (_) {}
    });

    // The deepest active link (a feature page's sublink rather than nothing).
    function activeLink() {
      if (!sidebar) return null;
      const all = sidebar.querySelectorAll('.sidebar-link.active, .sidebar-sublink.active');
      return all.length ? all[all.length - 1] : null;
    }

    // Scroll the sidebar so the current page is visible - centred, and only
    // when it isn't comfortably on screen already, so the list doesn't jump.
    function revealActive() {
      const link = activeLink();
      if (!sidebar || !link) return;
      const box = sidebar.getBoundingClientRect();
      const r = link.getBoundingClientRect();
      const margin = 48;
      if (r.top >= box.top + margin && r.bottom <= box.bottom - margin) return;
      sidebar.scrollTop += (r.top - box.top) - (box.height - r.height) / 2;
    }

    // ---------- Sidebar: collapsible groups ----------
    // Two levels: the Features / Troubleshooting toggles, and the categories
    // inside Features. Toggles never navigate - each tree starts with its own
    // "All features" / "All topics" link. Categories behave as an accordion
    // (opening one closes its siblings) so the tree stays short on a phone.
    const GROUP_KEY = 'loach-docs-sidebar-groups';
    let groupState = {};
    try { groupState = JSON.parse(localStorage.getItem(GROUP_KEY) || '{}') || {}; } catch (_) { groupState = {}; }

    function persistGroupState(id, open) {
      if (!id) return;
      groupState[id] = open;
      try { localStorage.setItem(GROUP_KEY, JSON.stringify(groupState)); } catch (_) {}
    }

    function groupToggle(group) {
      return group.querySelector(':scope > .sidebar-group-toggle, :scope > .sidebar-toplevel-toggle');
    }

    function setGroupOpen(group, open, persist) {
      group.classList.toggle('open', open);
      const toggle = groupToggle(group);
      if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (persist) persistGroupState(group.dataset.group, open);
    }

    function siblingCategories(group) {
      return Array.from(group.parentElement.children).filter(function (el) {
        return el !== group && el.classList.contains('sidebar-group--category');
      });
    }

    // Initial state: the group holding the current page is always open;
    // otherwise the reader's last choice; otherwise closed.
    document.querySelectorAll('.sidebar-group').forEach(function (group) {
      const submenu = group.querySelector(':scope > .sidebar-submenu');
      if (!submenu) return;
      const id = group.dataset.group || '';
      const hasActive = !!submenu.querySelector('.active');
      group.classList.toggle('has-active', hasActive);
      const stored = Object.prototype.hasOwnProperty.call(groupState, id) ? !!groupState[id] : null;
      setGroupOpen(group, hasActive || stored === true, false);
    });

    // Enforce the accordion: in each category list keep only the category with
    // the current page open (or, failing that, the first one left open), and
    // remember that so other pages show the same tree.
    document.querySelectorAll('.sidebar-submenu--categories').forEach(function (list) {
      const cats = Array.from(list.children).filter(function (el) {
        return el.classList.contains('sidebar-group--category');
      });
      const keep = cats.filter(function (g) { return g.classList.contains('has-active'); })[0]
        || cats.filter(function (g) { return g.classList.contains('open'); })[0];
      cats.forEach(function (g) {
        const open = g === keep && g.classList.contains('open');
        setGroupOpen(g, open, g.classList.contains('has-active') || !open);
      });
    });

    document.querySelectorAll('.sidebar-group-toggle, .sidebar-toplevel-toggle').forEach(function (toggle) {
      const group = toggle.parentElement;
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        // Closing a sibling above the tapped row would shift it upwards; keep
        // the row where the finger is by compensating the scroll position.
        const before = toggle.getBoundingClientRect().top;
        const nowOpen = !group.classList.contains('open');
        setGroupOpen(group, nowOpen, true);
        if (nowOpen && group.classList.contains('sidebar-group--category')) {
          siblingCategories(group).forEach(function (g) { setGroupOpen(g, false, true); });
        }
        if (sidebar) sidebar.scrollTop += toggle.getBoundingClientRect().top - before;
      });
    });

    // Restore the reader's scroll position now that groups have their real
    // height (before this, scrollTop is clamped), then make sure the current
    // page is in view.
    restoreSidebarScroll();
    revealActive();

    // ---------- Sidebar: mobile drawer ----------
    const menuIconOpen = menuBtn ? menuBtn.innerHTML : '';
    const menuIconClose = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

    function isMobile() { return window.innerWidth <= MOBILE_MAX; }
    function isSidebarOpen() { return !!sidebar && sidebar.classList.contains('open'); }

    function syncMenuButton(open) {
      if (!menuBtn) return;
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      menuBtn.innerHTML = open ? menuIconClose : menuIconOpen;
    }

    function openSidebar() {
      if (!sidebar) return;
      sidebar.classList.add('open');
      if (overlay) overlay.classList.add('open');
      root.classList.add('sidebar-open'); // locks page scroll behind the drawer
      syncMenuButton(true);
      revealActive();
      // Move focus into the drawer (onto the current page if it's listed) so
      // keyboard and screen-reader users start inside it.
      requestAnimationFrame(function () {
        const target = activeLink() || sidebar.querySelector('a[href], button');
        if (target) target.focus({ preventScroll: true });
      });
    }

    function closeSidebar(restoreFocus) {
      if (!sidebar) return;
      const wasOpen = isSidebarOpen();
      sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      root.classList.remove('sidebar-open');
      syncMenuButton(false);
      if (wasOpen && restoreFocus && menuBtn) menuBtn.focus({ preventScroll: true });
    }

    if (sidebar && menuBtn) {
      if (!sidebar.id) sidebar.id = 'site-sidebar';
      menuBtn.setAttribute('aria-controls', sidebar.id);
      syncMenuButton(false);
      menuBtn.addEventListener('click', function () {
        if (isSidebarOpen()) closeSidebar(false);
        else openSidebar();
      });
    }
    if (overlay) overlay.addEventListener('click', function () { closeSidebar(false); });

    // Following a link closes the drawer; the page then navigates.
    if (sidebar) {
      sidebar.querySelectorAll('a[href]').forEach(function (link) {
        link.addEventListener('click', function () {
          if (isMobile()) closeSidebar(false);
        });
      });
    }

    // Focus leaving the open drawer (Tab past its end, the topbar search...)
    // closes it, so nothing behind the overlay is used while it's covered.
    document.addEventListener('focusin', function (e) {
      if (!isSidebarOpen() || !isMobile()) return;
      if (sidebar.contains(e.target) || (menuBtn && menuBtn.contains(e.target))) return;
      closeSidebar(false);
    });

    // Growing past the drawer breakpoint while it's open drops the drawer state.
    window.addEventListener('resize', function () {
      if (!isMobile() && isSidebarOpen()) closeSidebar(false);
    }, { passive: true });

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

      // Below 1280px the side TOC is hidden, so pages with a few sections also
      // get a collapsible copy under their intro (CSS shows it only there).
      if (headings.length >= 3) {
        const inline = document.createElement('details');
        inline.className = 'toc-inline';
        const summary = document.createElement('summary');
        summary.textContent = 'On this page';
        inline.appendChild(summary);
        inline.appendChild(list.cloneNode(true));
        // Fold it away after a jump so it doesn't sit open above the section.
        inline.addEventListener('click', function (e) {
          if (e.target.closest('a')) inline.open = false;
        });
        const intro = content.querySelector(':scope > .lead, :scope > .hero') || content.querySelector(':scope > h1');
        if (intro) intro.insertAdjacentElement('afterend', inline);
      }

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
      window.addEventListener('resize', onScroll, { passive: true });
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
        } else if (isSidebarOpen()) {
          closeSidebar(true);
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
    }, { passive: true });
  });
})();
