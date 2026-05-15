import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSiteStore } from '../../store/siteStore';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Badge from '../../components/ui/Badge';

export default function MerchandisePage() {
  const merch = useSiteStore((s) => s.merch);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <p className="font-body text-brand-gray text-[10px] tracking-[0.25em] uppercase mb-2">
              The Zamora Collection
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-brand-cream">
              Merchandise
            </h1>
          </motion.div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
            {merch.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-4 bg-brand-dark">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {item.tag && (
                    <div className="absolute top-3 left-3">
                      <Badge label={item.tag} />
                    </div>
                  )}
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/5 transition-colors duration-300" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-body text-xs text-brand-cream/90 font-medium group-hover:text-brand-gold transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="font-body text-xs text-brand-gray tracking-wide">
                    {item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state if no merch */}
          {merch.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-body text-brand-gray text-sm italic">New collection coming soon.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
