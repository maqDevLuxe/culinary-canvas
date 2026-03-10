import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    quote: "Aurélie doesn't serve dinner — it performs it. Every course is a revelation.",
    critic: "— Le Monde Gastronomique",
    stars: 5,
  },
  {
    quote: "The most profound culinary experience I have encountered in thirty years of criticism.",
    critic: "— The Times Food Review",
    stars: 5,
  },
  {
    quote: "Chef Beaumont has created something beyond a restaurant. This is a temple of taste.",
    critic: "— New York Times Dining",
    stars: 5,
  },
];

const Reviews = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-body text-xs tracking-[0.5em] uppercase text-primary text-center mb-4"
        >
          Critics Say
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-6xl text-center text-foreground font-light mb-16"
        >
          Press & Reviews
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <span key={j} className="text-primary text-sm">★</span>
                ))}
              </div>
              <p className="font-display text-lg md:text-xl italic text-foreground leading-relaxed mb-6">
                "{r.quote}"
              </p>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">{r.critic}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
