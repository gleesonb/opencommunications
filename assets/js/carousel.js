/* ==========================================================================
   Open Communications — hero carousel
   Dependency-free. Auto-advances, supports prev/next, pauses on hover/focus,
   and stays still when the user prefers reduced motion.
   ========================================================================== */
(function () {
  "use strict";

  var root = document.querySelector("[data-carousel]");
  if (!root) return;

  var slides = Array.prototype.slice.call(root.querySelectorAll(".slide"));
  if (slides.length < 2) return;

  var prevBtn = root.querySelector("[data-prev]");
  var nextBtn = root.querySelector("[data-next]");
  var index = 0;
  var timer = null;
  var interval = 5000;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach(function (slide, n) {
      var active = n === index;
      slide.classList.toggle("is-active", active);
      // Hide inactive slides from assistive tech (CSS opacity alone does not)
      slide.setAttribute("aria-hidden", active ? "false" : "true");
    });
  }

  function next() { show(index + 1); }
  function prev() { show(index - 1); }

  function start() {
    if (reduced) return;
    stop();
    timer = window.setInterval(next, interval);
  }
  function stop() {
    if (timer) { window.clearInterval(timer); timer = null; }
  }

  if (prevBtn) prevBtn.addEventListener("click", function () { prev(); start(); });
  if (nextBtn) nextBtn.addEventListener("click", function () { next(); start(); });

  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", start);

  // Basic swipe support on touch devices
  var startX = null;
  root.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
  root.addEventListener("touchend", function (e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); start(); }
    startX = null;
  }, { passive: true });

  show(0);
  start();
})();
