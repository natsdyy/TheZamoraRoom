import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoMark from '@assets/Logo/Logo.png';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <img
              src={logoMark}
              alt="The Zamora Room Logo"
              className="w-48 md:w-64 lg:w-72 object-contain"
            />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="font-body text-brand-black text-lg md:text-xl font-medium mb-3">
              The Zamora Room – Coffee Lab
            </h2>
            <p className="font-body text-brand-black/70 leading-relaxed text-sm md:text-base">
              Built with heart and brewed with purpose, The Zamora Room – 
              Coffee Lab aims to raise the bar for third-wave coffee in Cavite, 
              while becoming a local symbol of excellence and inspiration.
            </p>
            <p className="font-body text-brand-black/50 leading-relaxed text-sm md:text-base mt-3 mb-8">
              Every cup tells a story — from ethically sourced beans to artisan 
              brewing methods. Step into The Zamora Room and experience coffee 
              the way it was meant to be.
            </p>
            
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 border border-brand-black/10 text-brand-black px-6 py-2.5 text-[10px] font-body tracking-[0.2em] uppercase hover:bg-brand-black hover:text-white transition-all duration-300"
            >
              View Full Menu
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
