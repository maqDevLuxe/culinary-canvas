import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const policies = [
  { title: "Dress Code", desc: "Smart formal attire required. Gentlemen: suit jacket. No sportswear, denim, or open footwear." },
  { title: "Reservations", desc: "Required. Accepted up to 90 days in advance. A credit card guarantee is required for all bookings." },
  { title: "Cancellation", desc: "48-hour notice required. Late cancellations incur a €150 per person charge." },
  { title: "Children", desc: "Guests aged 12 and above are welcome. A dedicated children's tasting menu is available." },
  { title: "Photography", desc: "Discreet personal photography is permitted. Flash and professional equipment are not." },
  { title: "Dietary", desc: "All dietary requirements accommodated with 72-hour advance notice." },
];

const DressCode = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-truffle">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-body text-xs tracking-[0.5em] uppercase text-primary text-center mb-4"
        >
          Please Note
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-6xl text-center text-foreground font-light mb-16"
        >
          Dress Code & Policy
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {policies.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
            >
              <h4 className="font-display text-xl text-primary mb-2">{p.title}</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DressCode;
