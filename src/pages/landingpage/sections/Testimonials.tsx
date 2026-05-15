import { motion } from 'framer-motion';
import { useSiteStore } from '../../../store/siteStore';
import StarRating from '../../../components/ui/StarRating';

export default function Testimonials() {
  const testimonials = useSiteStore((s) => s.testimonials);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl md:text-3xl text-brand-cream">
            Testimonials
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-brand-black/50 border border-white/5 p-5 flex flex-col hover:border-white/10 transition-colors duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center font-display text-brand-gold text-sm shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-body text-xs text-brand-cream font-medium leading-tight">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-[10px] text-brand-gray">
                    {testimonial.handle}
                  </p>
                </div>
              </div>

              <div className="mb-2.5">
                <StarRating rating={testimonial.stars} size={12} />
              </div>

              <p className="font-body text-xs text-brand-gray/80 leading-relaxed flex-1">
                {testimonial.text}
              </p>

              <div className="mt-3 pt-3 border-t border-white/5">
                <p className="font-body text-[10px] text-brand-gray/40 flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-emerald-400/60 rounded-full" />
                  Verified on The Zamora Room – Coffee Lab
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
