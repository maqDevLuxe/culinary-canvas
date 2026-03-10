import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const courses = [
  { name: "Amuse-Bouche", desc: "Sea urchin custard, yuzu foam, oscietra caviar", price: "" },
  { name: "First Course", desc: "Hokkaido scallop, black truffle, celery root velouté", price: "€48" },
  { name: "Second Course", desc: "Langoustine tartare, finger lime, shiso granita", price: "€62" },
  { name: "Fish Course", desc: "Wild turbot, champagne beurre blanc, sea vegetables", price: "€78" },
  { name: "Meat Course", desc: "A5 Wagyu tenderloin, bone marrow jus, périgord truffle", price: "€120" },
  { name: "Cheese", desc: "Selection of aged French artisanal cheeses", price: "€35" },
  { name: "Pre-Dessert", desc: "Bergamot sorbet, olive oil, Maldon salt", price: "" },
  { name: "Grand Dessert", desc: "Valrhona chocolate soufflé, gold leaf, tahitian vanilla", price: "€42" },
];

const TastingMenu = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="menu" ref={ref} className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-body text-xs tracking-[0.5em] uppercase text-primary text-center mb-4"
        >
          The Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl text-center text-foreground mb-4 font-light"
        >
          Tasting Menu
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="gold-line h-px w-24 mx-auto mb-16"
        />

        <div className="space-y-0">
          {courses.map((course, i) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group border-b border-border py-6 flex items-baseline justify-between cursor-default"
              data-hover
            >
              <div className="flex-1">
                <h4 className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {course.name}
                </h4>
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={hovered === i ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-body text-sm text-muted-foreground mt-1 overflow-hidden"
                >
                  {course.desc}
                </motion.p>
              </div>
              {course.price && (
                <span className="font-body text-sm text-primary ml-4">{course.price}</span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-12 font-body text-xs tracking-widest uppercase text-muted-foreground"
        >
          Full Tasting Menu — €385 per person
        </motion.p>
      </div>
    </section>
  );
};

export default TastingMenu;
