import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export const Ornament = () => (
  <div className="ornament" aria-hidden="true">
    <span>◆</span>
  </div>
);

export const Reveal = ({ children, delay = 0, className, ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
);

export const SectionHeader = ({ label, title, sub, center = true, dark = true }) => (
  <div className={`section-head ${center ? "center" : ""}`}>
    {center && (
      <Reveal>
        <Ornament />
      </Reveal>
    )}
    <Reveal delay={0.08}>
      <span className="label">— {label}</span>
    </Reveal>
    <Reveal delay={0.16}>
      <h2 className="section-title">{title}</h2>
    </Reveal>
    {sub && (
      <Reveal delay={0.24}>
        <p className="section-sub" style={center ? { margin: "0 auto" } : {}}>
          {sub}
        </p>
      </Reveal>
    )}
  </div>
);

export const Counter = ({ value, suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
};
