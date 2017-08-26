// =============================================================================
// Ease-in quint
// =============================================================================

function easeOutQuint(t, b, c, d) {
  // time, begin, change, duration
  // eslint-disable-next-line
  const ts = (t /= d) * t;
  const tc = ts * t;
  return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t);
}

// =============================================================================
// Smooth scroll
// =============================================================================

export default function smoothScroll(element, duration = 750) {
  const to = element.offsetTop;
  const startTime = window.performance.now();
  const endTime = startTime + duration;
  const start = document.body.scrollTop;
  const animateScroll = () => {
    const now = window.performance.now();
    document.body.scrollTop = easeOutQuint(now - startTime, start, to - start, duration);
    now < endTime && requestAnimationFrame(animateScroll);
  };
  animateScroll();
}
