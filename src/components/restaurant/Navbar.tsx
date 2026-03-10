import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Menu", "Chef", "Wine", "Ambiance", "Reserve"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-background/80 backdrop-blur-md"
    >
      <a href="#" className="font-display text-2xl md:text-3xl font-light tracking-[0.3em] text-foreground uppercase">
        Aurélie
      </a>

      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-body text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            data-hover
          >
            {link}
          </a>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5"
        data-hover
      >
        <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${open ? "rotate-45 translate-y-[3px]" : ""}`} />
        <span className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[3px]" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md py-8 flex flex-col items-center gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
