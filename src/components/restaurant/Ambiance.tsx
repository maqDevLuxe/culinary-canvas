import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import amb1 from "@/assets/ambiance-1.jpg";
import amb2 from "@/assets/ambiance-2.jpg";
import amb3 from "@/assets/ambiance-3.jpg";
import amb4 from "@/assets/ambiance-4.jpg";

const images = [
  { src: amb1, alt: "Dark elegant dining room", span: "md:col-span-2 md:row-span-2" },
  { src: amb2, alt: "Gourmet dessert", span: "" },
  { src: amb3, alt: "Table setting", span: "" },
  { src: amb4, alt: "Artful appetizer", span: "md:col-span-2" },
];

const Ambiance = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ambiance" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-body text-xs tracking-[0.5em] uppercase text-primary text-center mb-4"
        >
          The Setting
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl text-center text-foreground font-light mb-16"
        >
          Ambiance
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className={`image-borderless overflow-hidden ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ambiance;
