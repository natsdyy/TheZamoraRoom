import { motion } from 'framer-motion';
import { MapPin, Clock, Mail, Phone } from 'lucide-react';
import { useSiteStore } from '../../../store/siteStore';
import Badge from '../../../components/ui/Badge';

export default function Stores() {
  const stores = useSiteStore((s) => s.stores);

  return (
    <section id="stores" className="py-16 md:py-24 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="font-body text-brand-gray text-[10px] tracking-[0.25em] uppercase mb-1.5">
            Visit Us
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-brand-cream">
            Our Stores
          </h2>
        </motion.div>

        {/* Store cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {stores.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-black/40 border border-white/5 p-6 md:p-8 hover:border-white/10 transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <h3 className="font-display text-lg md:text-xl text-brand-cream tracking-wide">
                  {store.name}
                </h3>
                <Badge label={store.status} />
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-brand-gold shrink-0 mt-0.5" />
                  <p className="font-body text-xs text-brand-gray/80 leading-relaxed">{store.address}</p>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock size={14} className="text-brand-gold shrink-0 mt-0.5" />
                  <p className="font-body text-xs text-brand-gray/80 leading-relaxed">{store.hours}</p>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail size={14} className="text-brand-gold shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${store.email}`}
                    className="font-body text-xs text-brand-gray/80 hover:text-brand-gold transition-colors duration-200"
                  >
                    {store.email}
                  </a>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone size={14} className="text-brand-gold shrink-0 mt-0.5" />
                  <a
                    href={`tel:${store.phone}`}
                    className="font-body text-xs text-brand-gray/80 hover:text-brand-gold transition-colors duration-200"
                  >
                    {store.phone}
                  </a>
                </div>
              </div>

              {/* Amenities */}
              {store.amenities && store.amenities.length > 0 && (
                <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-3">
                  {store.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full">
                      <span className="w-1 h-1 rounded-full bg-brand-gold" />
                      <span className="text-[10px] font-body text-brand-gray/70 uppercase tracking-wider">{amenity}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
