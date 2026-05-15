import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-body font-medium tracking-widest uppercase transition-all duration-300';

  const variants = {
    primary: 'bg-brand-gold text-brand-black hover:bg-yellow-500',
    outline: 'border border-brand-cream/30 text-brand-cream hover:bg-brand-cream hover:text-brand-black hover:border-brand-cream',
    ghost: 'text-brand-gray hover:text-brand-cream hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-[10px]',
    md: 'px-6 py-2 text-xs',
    lg: 'px-8 py-3 text-sm',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
