import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Philosophy = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4"
        >
          Our Belief
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-6xl text-foreground font-light mb-12"
        >
          Culinary Philosophy
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-8"
        >
          <p className="font-display text-2xl md:text-3xl italic text-champagne font-light leading-relaxed">
            "We do not serve food. We compose moments — fragile, fleeting, unforgettable."
          </p>
          <div className="gold-line h-px w-16 mx-auto" />
          <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            At Aurélie, every ingredient is a note in a symphony. We honor the land, 
            the seasons, and the centuries of tradition that have shaped haute cuisine, 
            while daring to reimagine what a meal can become. Our kitchen is a studio. 
            Our plates are canvases. Our guests are the audience of an edible performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
