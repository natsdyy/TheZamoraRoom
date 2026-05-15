import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSiteStore } from '../../../store/siteStore';
import Badge from '../../../components/ui/Badge';

export default function Merchandise() {
  const merch = useSiteStore((s) => s.merch);
  const displayItems = merch.slice(0, 4); // Show only first 4 on landing page

  return (
    <section id="merch" className="py-16 md:py-24 bg-brand-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-end mb-10"
        >
          <div>
            <p className="font-body text-brand-gray text-[10px] tracking-[0.25em] uppercase mb-1.5">
              Shop
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-brand-cream">
              Merchandise
            </h2>
          </div>

          <Link
            to="/merchandise"
            className="hidden sm:block font-body text-[10px] text-brand-gray hover:text-brand-gold tracking-widest uppercase transition-colors"
          >
            View All Collection
          </Link>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {displayItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-square mb-3 bg-brand-dark">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.tag && (
                  <div className="absolute top-2.5 left-2.5">
                    <Badge label={item.tag} />
                  </div>
                )}
              </div>

              <h3 className="font-body text-xs text-brand-cream/90 font-medium group-hover:text-brand-gold transition-colors duration-200">
                {item.name}
              </h3>
              <p className="font-body text-xs text-brand-gray mt-0.5">
                {item.price}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link
            to="/merchandise"
            className="inline-block border border-white/10 text-brand-cream px-6 py-2.5 text-[10px] font-body tracking-[0.2em] uppercase hover:bg-white/5 transition-all"
          >
            Shop Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
