import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex-1 min-h-[80vh] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden bg-brand-black pt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10"
      >
        <p className="font-display text-8xl md:text-9xl text-brand-gold mb-4 italic">404</p>
        <h1 className="font-display text-3xl md:text-4xl text-brand-cream mb-6">
          Page Not Found
        </h1>
        <p className="font-body text-sm text-brand-gray max-w-md mx-auto mb-10 leading-relaxed">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-block border border-brand-gold/50 text-brand-gold px-8 py-4 rounded-xl text-xs font-body tracking-[0.2em] uppercase hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
}
