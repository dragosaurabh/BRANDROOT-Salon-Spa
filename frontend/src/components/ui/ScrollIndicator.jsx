import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 114]);

  return (
    <div className="scroll-rail" aria-hidden="true">
      <motion.span className="scroll-rail-thumb" style={{ y, rotate: 45 }} />
    </div>
  );
};
