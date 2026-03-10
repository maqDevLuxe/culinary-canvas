import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import kitchenImg from "@/assets/kitchen-action.jpg";

const KitchenAction = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
      className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden"
    >
      <img src={kitchenImg} alt="Kitchen action" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-3xl md:text-5xl lg:text-7xl text-foreground font-light text-center italic"
        >
          Precision is our poetry
        </motion.p>
      </div>
    </motion.section>
  );
};

export default KitchenAction;
