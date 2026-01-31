/**
 * Table of Contents functionality for paper layout
 * - Mobile sidebar toggle
 * - Active section highlighting
 * - Smooth scroll behavior
 */

(function() {
  'use strict';

  const sidebar = document.getElementById('paperSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const toggleBtn = document.getElementById('tocToggle');

  if (!sidebar || !toggleBtn) return;

  // Toggle sidebar on mobile
  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', function() {
    if (sidebar.classList.contains('open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  // Close sidebar when clicking overlay
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // Close sidebar when clicking a TOC link (mobile)
  const tocLinks = sidebar.querySelectorAll('.paper-toc a');
  tocLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth < 1024) {
        closeSidebar();
      }
    });
  });

  // Close sidebar on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });

  // Active section highlighting
  function highlightActiveSection() {
    const sections = document.querySelectorAll('.paper-body h2[id]');
    const scrollPosition = window.scrollY + 100; // Offset for better UX

    let currentSection = null;

    sections.forEach(function(section) {
      if (section.offsetTop <= scrollPosition) {
        currentSection = section;
      }
    });

    tocLinks.forEach(function(link) {
      link.classList.remove('active');
      if (currentSection) {
        const href = link.getAttribute('href');
        if (href === '#' + currentSection.id) {
          link.classList.add('active');
        }
      }
    });
  }

  // Debounce scroll handler for performance
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(highlightActiveSection);
  });

  // Initial highlight
  highlightActiveSection();

  // Handle window resize - close mobile sidebar if resized to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024 && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });
})();
