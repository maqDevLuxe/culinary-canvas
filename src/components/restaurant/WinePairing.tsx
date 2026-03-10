import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import wineImage from "@/assets/wine-pairing.jpg";

const wines = [
  { name: "Dom Pérignon 2012", type: "Champagne", note: "Pairs with amuse-bouche" },
  { name: "Puligny-Montrachet", type: "Burgundy White", note: "Pairs with fish course" },
  { name: "Château Margaux 2015", type: "Bordeaux Red", note: "Pairs with meat course" },
  { name: "Château d'Yquem 2009", type: "Sauternes", note: "Pairs with grand dessert" },
];

const WinePairing = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="wine" ref={ref} className="section-padding bg-truffle">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">Sommelier's Selection</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-light mb-8">
            Fine Wine<br />Pairing
          </h2>
          <div className="space-y-6">
            {wines.map((w, i) => (
              <motion.div
                key={w.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="border-b border-border pb-4"
              >
                <h4 className="font-display text-xl text-foreground">{w.name}</h4>
                <div className="flex justify-between mt-1">
                  <span className="font-body text-xs text-primary tracking-wider">{w.type}</span>
                  <span className="font-body text-xs text-muted-foreground italic">{w.note}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="image-borderless"
        >
          <img src={wineImage} alt="Sommelier pouring wine" className="w-full aspect-[3/4] object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default WinePairing;
