import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const awards = [
  { title: "Three Michelin Stars", subtitle: "Since 2018", icon: "★★★" },
  { title: "World's 50 Best", subtitle: "#4 Worldwide", icon: "50" },
  { title: "James Beard Award", subtitle: "Outstanding Chef", icon: "JB" },
  { title: "La Liste", subtitle: "Top 10 Global", icon: "№1" },
];

const AwardBadges = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-truffle">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {awards.map((award, i) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="flex flex-col items-center text-center"
          >
            <span className="font-display text-4xl md:text-5xl text-primary mb-3">{award.icon}</span>
            <h3 className="font-display text-lg md:text-xl text-foreground mb-1">{award.title}</h3>
            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">{award.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AwardBadges;
