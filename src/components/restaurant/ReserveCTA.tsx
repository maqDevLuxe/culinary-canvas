import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ReserveCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section id="reserve" ref={ref} className="section-padding bg-truffle">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4"
          >
            Your Table Awaits
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-foreground font-light mb-6"
          >
            Reserve a Table
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
            className="gold-line h-px w-24 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="font-body text-sm text-muted-foreground mb-12 leading-relaxed"
          >
            Join us for an extraordinary culinary journey. Reservations are recommended 
            at least four weeks in advance for weekend dining.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="tel:+33142685432"
              className="font-body text-xs tracking-[0.3em] uppercase border border-gold px-10 py-4 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              data-hover
            >
              Call +33 1 42 68 54 32
            </a>
            <a
              href="mailto:reservations@aurelie.paris"
              className="font-body text-xs tracking-[0.3em] uppercase border border-gold px-10 py-4 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              data-hover
            >
              Email Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="mt-16 space-y-2"
          >
            <p className="font-body text-xs text-muted-foreground tracking-wider">
              12 Rue de la Paix, 75002 Paris, France
            </p>
            <p className="font-body text-xs text-muted-foreground tracking-wider">
              Tuesday – Saturday · 19:00 – 23:00
            </p>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border">
        <span className="font-display text-lg tracking-[0.2em] text-foreground uppercase">Aurélie</span>
        <p className="font-body text-xs text-muted-foreground tracking-wider">
          © 2025 Aurélie. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider" data-hover>Instagram</a>
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider" data-hover>Facebook</a>
        </div>
      </footer>
    </>
  );
};

export default ReserveCTA;
