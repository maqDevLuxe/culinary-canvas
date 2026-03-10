import { motion } from "framer-motion";
import heroDish from "@/assets/hero-dish.jpg";

const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroDish} alt="Exquisite plating with rising steam" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/50" />
    </div>

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-6"
      >
        Three Michelin Stars
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-wider gold-gradient-text"
      >
        Aurélie
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.3 }}
        className="gold-line h-px w-40 mt-8 mb-6"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="font-display text-xl md:text-2xl italic text-champagne font-light"
      >
        Where every plate tells a story
      </motion.p>

      <motion.a
        href="#reserve"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="mt-12 font-body text-xs tracking-[0.3em] uppercase border border-gold px-10 py-4 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        data-hover
      >
        Reserve a Table
      </motion.a>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-px h-12 bg-primary/40"
      />
    </motion.div>
  </section>
);

export default Hero;
