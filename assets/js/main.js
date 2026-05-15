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

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  applyTheme(getInitialTheme());

  document.addEventListener('DOMContentLoaded', function () {
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

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
