import Lenis from "lenis";

let lenis = null;

export const initLenis = () => {
  if (lenis) return lenis;
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  return lenis;
};

export const scrollToTop = (immediate = false) => {
  if (lenis) lenis.scrollTo(0, { immediate, duration: 1.2 });
  else window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
};
