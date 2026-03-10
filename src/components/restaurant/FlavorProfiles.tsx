import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { label: "Local Farms", value: "94%", desc: "Ingredients sourced within 100km" },
  { label: "Organic", value: "100%", desc: "All produce certified organic" },
  { label: "Seasonal Rotations", value: "12", desc: "Menu changes per year" },
  { label: "Unique Suppliers", value: "47", desc: "Artisan producers worldwide" },
];

const profiles = [
  { name: "Umami", pct: 92 },
  { name: "Acidity", pct: 78 },
  { name: "Sweetness", pct: 45 },
  { name: "Bitterness", pct: 30 },
  { name: "Salinity", pct: 65 },
];

const FlavorProfiles = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-body text-xs tracking-[0.5em] uppercase text-primary text-center mb-4"
        >
          Our Craft
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl text-center text-foreground font-light mb-16"
        >
          Flavor & Sourcing
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="font-display text-2xl text-foreground mb-6">Flavor Profile</h3>
            {profiles.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">{p.name}</span>
                  <span className="font-body text-xs text-primary">{p.pct}%</span>
                </div>
                <div className="w-full h-px bg-muted overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1.2, delay: 0.4 + i * 0.1 }}
                    style={{ width: `${p.pct}%`, transformOrigin: "left" }}
                    className="h-full bg-primary"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12 }}
                className="text-center"
              >
                <span className="font-display text-4xl md:text-5xl text-primary">{m.value}</span>
                <h4 className="font-body text-xs tracking-widest uppercase text-foreground mt-3 mb-1">{m.label}</h4>
                <p className="font-body text-xs text-muted-foreground">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlavorProfiles;
