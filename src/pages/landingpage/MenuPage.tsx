import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSiteStore } from '../../store/siteStore';
import Header from './sections/Header';
import Footer from './sections/Footer';
import menuHeroBg from '@/assets/hero/herobackgound4.png';
import coffee1 from '@/assets/coffee/coffee1.png';
import coffee2 from '@/assets/coffee/coffee2.png';
import ProtectedImage from '../../components/ui/ProtectedImage';

export default function MenuPage() {
  const menuItems = useSiteStore((s) => s.menu);
  const categories = [
    'Espresso-Based Classics',
    'Signature House Specials',
    'Matcha Creations',
    'Non-Coffee Options',
    'Off-The-Menu',
    'Brew It Yourself Experience'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Menu Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={menuHeroBg}
              alt="Menu Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-6"
          >
            <p className="font-body text-brand-gold text-[10px] tracking-[0.4em] uppercase mb-4">
              Our Selection
            </p>
            <h1 className="font-display-serif italic text-4xl md:text-6xl lg:text-7xl text-brand-cream leading-tight">
              The Menu
            </h1>
          </motion.div>
        </section>

        {/* Dynamic Craft Spotlight Banner */}
        <section className="py-12 bg-gradient-to-b from-brand-black to-brand-dark/50 border-b border-white/5">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Highlight Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 bg-brand-dark/30 shadow-xl"
              >
                <ProtectedImage 
                  src={coffee1} 
                  alt="Artisan Espresso Extraction" 
                  className="w-full h-full object-cover grayscale-[0.25] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 pointer-events-none" />
                <div className="absolute bottom-4 left-4 z-30 pointer-events-none">
                  <p className="font-body text-brand-gold text-[9px] tracking-[0.3em] uppercase mb-1">Extraction</p>
                  <h4 className="font-display text-base text-brand-cream tracking-wider uppercase">Artisan Espresso</h4>
                </div>
              </motion.div>

              {/* Highlight Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 bg-brand-dark/30 shadow-xl"
              >
                <ProtectedImage 
                  src={coffee2} 
                  alt="Signature Pour-Over" 
                  className="w-full h-full object-cover grayscale-[0.25] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 pointer-events-none" />
                <div className="absolute bottom-4 left-4 z-30 pointer-events-none">
                  <p className="font-body text-brand-gold text-[9px] tracking-[0.3em] uppercase mb-1">Brewing Science</p>
                  <h4 className="font-display text-base text-brand-cream tracking-wider uppercase">Signature Pour-Over</h4>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
          <div className="space-y-24">
            {categories.map((category, catIndex) => {
              const items = menuItems.filter((item) => item.category === category);
              if (items.length === 0) return null;

              return (
                <div key={category}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                    className="flex flex-col items-center mb-16"
                  >
                    <h2 className="font-display text-2xl md:text-3xl text-brand-gold tracking-[0.2em] uppercase text-center mb-4">
                      {category}
                    </h2>
                    <div className="w-24 h-px bg-brand-gold/30" />
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
                    {/* Hot/Iced Headers for certain categories */}
                    {['Espresso-Based Classics', 'Matcha Creations', 'Non-Coffee Options'].includes(category) && (
                      <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-x-20 mb-2 px-2 border-b border-white/5 pb-2">
                        <div className="flex justify-end gap-16">
                          <span className="font-display text-[10px] text-brand-gold/50 uppercase tracking-[0.3em] font-bold">Hot</span>
                          <span className="font-display text-[10px] text-brand-gold/50 uppercase tracking-[0.3em] font-bold">Iced</span>
                        </div>
                        <div className="hidden md:flex justify-end gap-16">
                          <span className="font-display text-[10px] text-brand-gold/50 uppercase tracking-[0.3em] font-bold">Hot</span>
                          <span className="font-display text-[10px] text-brand-gold/50 uppercase tracking-[0.3em] font-bold">Iced</span>
                        </div>
                      </div>
                    )}

                    {items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex flex-col group"
                      >
                        <div className="flex justify-between items-baseline gap-4 mb-2">
                          <h3 className="font-body text-base text-brand-cream font-medium tracking-wide group-hover:text-brand-gold transition-colors duration-300">
                            {item.name}
                          </h3>
                          <div className="flex-1 border-b border-white/5 border-dotted mb-1" />
                          <div className="flex items-center gap-12 min-w-[120px] justify-end">
                            {item.priceHot && item.priceIced ? (
                              <>
                                <span className="font-body text-sm text-brand-gold font-medium w-12 text-right">
                                  {item.priceHot}
                                </span>
                                <span className="font-body text-sm text-brand-gold font-medium w-12 text-right">
                                  {item.priceIced}
                                </span>
                              </>
                            ) : item.priceHot ? (
                              <>
                                <span className="font-body text-sm text-brand-gold font-medium w-12 text-right">
                                  {item.priceHot}
                                </span>
                                <span className="w-12" />
                              </>
                            ) : item.priceIced ? (
                              <>
                                <span className="w-12" />
                                <span className="font-body text-sm text-brand-gold font-medium w-12 text-right">
                                  {item.priceIced}
                                </span>
                              </>
                            ) : (
                              <span className="font-body text-sm text-brand-gold font-medium">
                                {item.price}
                              </span>
                            )}
                          </div>
                        </div>
                        {item.description && (
                          <p className="font-body text-[11px] text-brand-gray/50 leading-relaxed max-w-[90%] italic">
                            {item.description}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
