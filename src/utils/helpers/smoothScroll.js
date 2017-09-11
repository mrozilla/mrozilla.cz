// =============================================================================
// Easings
// =============================================================================

const easeIn = power => progress => progress ** power;
const easeOut = power => progress => 1 - Math.abs(easeIn(power)(1 - progress));

// =============================================================================
// Smooth scroll
// =============================================================================

export default function smoothScroll(targetElement, duration = 750) {
  const time = {
    start: window.performance.now(),
    duration,
  };
  const position = {
    start: window.pageYOffset,
    end:   targetElement.offsetTop,
  };

  const tick = (now) => {
    const progress = (now - time.start) / time.duration;
    const easing = easeOut(5)(progress);
    const distance = position.end - position.start;

    window.scrollTo(0, position.start + easing * distance);

    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}
