// Lazy load non-critical CSS after LCP using requestIdleCallback
// This script is imported with defer/async to avoid blocking page render

function loadNonCriticalCSS() {
  const links = [
    '/_astro/FunnelPricing.CiqMy1XV.css',
    '/_astro/FunnelFaq.BYasK5TN.css'
  ];

  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      links.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      });
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      links.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      });
    }, 2000);
  }
}

// Wait for DOMContentLoaded or run immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNonCriticalCSS);
} else {
  loadNonCriticalCSS();
}
