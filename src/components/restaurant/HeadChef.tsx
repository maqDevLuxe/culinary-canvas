import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import chefImage from "@/assets/head-chef.jpg";

const HeadChef = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="chef" ref={ref} className="section-padding bg-truffle">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="image-borderless"
        >
          <img src={chefImage} alt="Head Chef Portrait" className="w-full aspect-[3/4] object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">The Visionary</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-light mb-6">
            Chef Laurent<br />
            <span className="text-primary">Beaumont</span>
          </h2>
          <div className="gold-line h-px w-16 mb-8" />
          <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">
            With over two decades at the pinnacle of French gastronomy, Chef Beaumont has redefined 
            modern cuisine through an unwavering commitment to terroir, technique, and the poetry of flavor.
          </p>
          <p className="font-body text-sm leading-relaxed text-muted-foreground mb-8">
            Trained under the great masters of Lyon and Tokyo, his cuisine bridges worlds — 
            rooted in classical French tradition yet boldly forward-looking, where every dish 
            is a meditation on perfection.
          </p>
          <p className="font-display text-lg italic text-primary">
            "Cooking is not about the plate. It's about the pause before the first bite."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeadChef;
