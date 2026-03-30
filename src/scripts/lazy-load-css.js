// Lazy load non-critical CSS using media="print" swap technique
// This is more efficient than requestIdleCallback and avoids render-blocking
// Links are loaded with media="print" initially, then swapped to "all" after LCP

function swapMediaQuery() {
  const printLinks = document.querySelectorAll('link[data-lazy-load]');
  printLinks.forEach(link => {
    if (link.media === 'print') {
      link.media = 'all';
    }
  });
}

// Swap after LCP using requestIdleCallback if available
if ('requestIdleCallback' in window) {
  requestIdleCallback(swapMediaQuery);
} else {
  // Fallback: swap after a short delay or on load event
  window.addEventListener('load', () => {
    setTimeout(swapMediaQuery, 100);
  });
}
