interface BadgeProps {
  label: string;
  className?: string;
}

const colorMap: Record<string, string> = {
  New: 'bg-brand-gold/10 text-brand-gold border-brand-gold/20',
  Bestseller: 'bg-emerald-500/10 text-emerald-400/80 border-emerald-400/20',
  Limited: 'bg-red-500/10 text-red-400/80 border-red-400/20',
  Open: 'bg-emerald-500/10 text-emerald-400/80 border-emerald-400/20',
  'Coming Soon': 'bg-brand-gold/10 text-brand-gold border-brand-gold/20',
  Closed: 'bg-brand-gray/10 text-brand-gray border-brand-gray/20',
};

export default function Badge({ label, className = '' }: BadgeProps) {
  const colors = colorMap[label] || 'bg-brand-gray/10 text-brand-gray border-brand-gray/20';

  return (
    <span
      className={`
        inline-block px-2 py-0.5 text-[9px] font-body font-semibold uppercase tracking-[0.15em]
        border ${colors} ${className}
      `}
    >
      {label}
    </span>
  );
}
