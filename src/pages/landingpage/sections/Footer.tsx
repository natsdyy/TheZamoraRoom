import { Link, useLocation } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import footerLogo from '../../../assets/footer/logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Merchandise', href: '/merchandise' },
];

const quickLinks = [
  { label: 'Our Stores', href: '/#stores' },
  { label: 'Testimonials', href: '/#testimonials' },
];

export default function Footer() {
  const location = useLocation();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const id = href.replace('/#', '#');
      const element = document.querySelector(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-black border-t border-white/5 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <img
              src={footerLogo}
              alt="The Zamora Room"
              className="h-10 w-auto mb-4 object-contain opacity-80"
            />
            <p className="font-body text-[11px] text-brand-gray/70 leading-relaxed max-w-xs">
              Built with heart and brewed in Dasmariñas, 
              The Zamora Room – Coffee Lab is your destination for artisan brews, 
              crafted with passion and precision.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-display text-[10px] tracking-[0.25em] text-brand-cream/60 mb-3 uppercase">
              Menu
            </h4>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-body text-xs text-brand-gray/80 hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-[10px] tracking-[0.25em] text-brand-cream/60 mb-3 uppercase">
              Explore
            </h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-body text-xs text-brand-gray/80 hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-[10px] tracking-[0.25em] text-brand-cream/60 mb-3 uppercase">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin size={12} className="text-brand-gold shrink-0 mt-0.5 opacity-70" />
                <span className="font-body text-[11px] text-brand-gray/80">
                  12 Aguinaldo Highway, Sampaloc 1, Dasmariñas, Philippines, 4114
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={12} className="text-brand-gold shrink-0 opacity-70" />
                <a
                  href="mailto:thezamoraroom@gmail.com"
                  className="font-body text-[11px] text-brand-gray/80 hover:text-brand-gold transition-colors duration-200"
                >
                  thezamoraroom@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={12} className="text-brand-gold shrink-0 opacity-70" />
                <a
                  href="tel:+639175178728"
                  className="font-body text-[11px] text-brand-gray/80 hover:text-brand-gold transition-colors duration-200"
                >
                  +63 917 517 8728
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-body text-[10px] text-brand-gray/40 uppercase tracking-widest">
            © {new Date().getFullYear()} The Zamora Room – Coffee Lab
          </p>
          <p className="font-body text-[9px] text-brand-gray/30 uppercase tracking-[0.2em]">
            Crafted in Cavite, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
