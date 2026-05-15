import { motion } from 'framer-motion';
import { MapPin, Clock, Mail, Phone, Wifi, Zap, Calendar } from 'lucide-react';
import { useSiteStore } from '../../../store/siteStore';
import Badge from '../../../components/ui/Badge';

export default function Venues() {
  const stores = useSiteStore((s) => s.stores);
  const store = stores[0]; // Focus on the main/only venue

  if (!store) return null;

  return (
    <section id="venues" className="py-20 md:py-32 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Visual Showcase (Left) */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-12 gap-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="col-span-8 aspect-[4/5] rounded-3xl overflow-hidden border border-white/5"
              >
                <img 
                  src={store.image} 
                  alt="Venue Main View" 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              
              <div className="col-span-4 flex flex-col gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="aspect-square rounded-2xl overflow-hidden border border-white/5"
                >
                  <img 
                    src={store.secondaryImage} 
                    alt="Venue Detail" 
                    className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex-1 bg-brand-gold/10 backdrop-blur-sm rounded-2xl border border-brand-gold/20 flex flex-col items-center justify-center p-4 text-center"
                >
                  <p className="font-display text-2xl text-brand-gold italic">Lab</p>
                  
                </motion.div>
              </div>
            </div>
            
            {/* Aesthetic decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-brand-gold/20 hidden lg:block" />
          </div>

          {/* Text Content (Right) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-brand-gold text-[10px] tracking-[0.4em] uppercase mb-4">
                The Destination
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-brand-cream mb-8 leading-tight">
                Our Venue
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl text-brand-gold border border-white/5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-body text-[10px] text-brand-gray uppercase tracking-widest mb-1">Address</h4>
                    <p className="font-body text-sm text-brand-cream/80 leading-relaxed max-w-xs">{store.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl text-brand-gold border border-white/5">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-body text-[10px] text-brand-gray uppercase tracking-widest mb-1">Hours</h4>
                    <p className="font-body text-sm text-brand-cream/80 leading-relaxed">{store.hours}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl text-brand-gold border border-white/5">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="font-body text-[10px] text-brand-gray uppercase tracking-widest mb-1">Status</h4>
                    <div className="flex items-center gap-2">
                      <p className="font-body text-sm text-brand-cream/80 leading-relaxed">Open Daily</p>
                      <Badge label="Active" variant="success" className="scale-75 origin-left" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Amenities Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-3">
                  <Wifi size={16} className="text-brand-gold" />
                  <span className="text-[10px] font-body text-brand-cream/60 uppercase tracking-widest">Free Wi-Fi</span>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-3">
                  <Zap size={16} className="text-brand-gold" />
                  <span className="text-[10px] font-body text-brand-cream/60 uppercase tracking-widest">Power Outlets</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                
                <a
                  href="https://maps.app.goo.gl/f5yX8nv9asMv32Rk7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-white/10 text-brand-cream px-6 py-4 rounded-xl text-[10px] font-body tracking-[0.2em] uppercase text-center hover:bg-white/10 transition-colors duration-300"
                >
                  Directions
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
