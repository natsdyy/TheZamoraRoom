import { motion } from 'framer-motion';
import { useSiteStore } from '../../../store/siteStore';
import { Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { title, subtitle, ctaLabel, bgImage } = useSiteStore((s) => s.hero);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with a more cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="The Zamora Room Lab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/40 to-brand-black/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Subtle top label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-brand-gold text-[10px] tracking-[0.45em] uppercase mb-5"
        >
          Specialty Coffee Lab
        </motion.p>

        {/* The "Editorial" Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display-serif text-6xl md:text-[5.5rem] lg:text-[7rem] text-brand-cream leading-[1.05] mb-8 italic"
        >
          {title.replace('\n', ' ')}
        </motion.h1>

        {/* Refined Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-body text-brand-cream/60 text-[10px] md:text-xs tracking-[0.25em] mb-12 max-w-md mx-auto leading-relaxed uppercase"
        >
          {subtitle}
        </motion.p>

        {/* Minimalist Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            to="/menu"
            className="group relative rounded-xl inline-flex items-center gap-5 px-9 py-3.5 bg-transparent border border-brand-cream/15 text-brand-cream overflow-hidden transition-all duration-500 hover:border-brand-gold/40"
          >
            <Coffee className="text-brand-gold shrink-0 mt-0.5" />
            <span className="relative z-10 font-body text-[9px] tracking-[0.4em] uppercase group-hover:text-brand-gold transition-colors duration-300">
              {ctaLabel}
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-px h-12 bg-gradient-to-b from-brand-cream to-transparent" />
      </motion.div>
    </section>
  );
}
