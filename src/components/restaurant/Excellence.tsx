import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const Counter = ({ value, suffix = "", inView }: { value: number; suffix?: string; inView: boolean }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2.5, ease: "easeOut" });
    }
  }, [inView, count, value]);

  return (
    <motion.span className="font-display text-5xl md:text-7xl text-primary">
      <motion.span>{rounded}</motion.span>{suffix}
    </motion.span>
  );
};

const stats = [
  { value: 23, suffix: "", label: "Years of Excellence" },
  { value: 3, suffix: "", label: "Michelin Stars" },
  { value: 847, suffix: "", label: "Unique Dishes Created" },
  { value: 12, suffix: "", label: "Culinary Awards" },
];

const Excellence = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-truffle">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <Counter value={s.value} suffix={s.suffix} inView={inView} />
            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-4">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Excellence;
