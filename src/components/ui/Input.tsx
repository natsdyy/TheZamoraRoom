interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-[10px] font-body text-brand-gray/60 uppercase tracking-[0.2em] mb-1.5">
          {label}
        </label>
      )}
      <input
        className="w-full bg-brand-black/40 border border-white/5 text-brand-cream px-3 py-2 text-xs font-body placeholder:text-brand-gray/30 focus:outline-none focus:border-brand-gold/30 transition-colors"
        {...props}
      />
    </div>
  );
}

export function Textarea({ label, ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-[10px] font-body text-brand-gray/60 uppercase tracking-[0.2em] mb-1.5">
          {label}
        </label>
      )}
      <textarea
        className="w-full bg-brand-black/40 border border-white/5 text-brand-cream px-3 py-2 text-xs font-body placeholder:text-brand-gray/30 focus:outline-none focus:border-brand-gold/30 transition-colors min-h-[80px] resize-none"
        {...props}
      />
    </div>
  );
}
