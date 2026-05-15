import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 12px 40px rgba(200,150,42,0.08)' } : undefined}
      transition={{ duration: 0.25 }}
      className={`bg-brand-dark border border-white/5 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
