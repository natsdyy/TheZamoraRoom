import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Facebook, Instagram } from 'lucide-react';
import logo2 from '@assets/Logo/Logo2.png';

const navLinks = [
  { label: 'Home', href: '/', isAnchor: true, anchor: '#hero' },
  { label: 'Menu', href: '/menu', isAnchor: false },
  { label: 'Merchandise', href: '/merchandise', isAnchor: false },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.isAnchor && location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(link.anchor!);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMenuOpen(false);
    } else if (link.isAnchor) {
      // If we are on another page and click Home/Anchor, go to root
      setMenuOpen(false);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || location.pathname !== '/'
          ? 'bg-brand-black/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-14">
        {/* Logo */}
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, navLinks[0])}
          className="flex items-center gap-2.5"
        >
          <img
            src={logo2}
            alt="The Zamora Room"
            className="h-7 w-7 object-contain rounded-sm"
          />
          <span className="font-body text-sm font-medium tracking-wide text-brand-cream/90">
            The Zamora Room
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`font-body text-xs tracking-wider uppercase transition-colors duration-200 ${
                location.pathname === link.href
                  ? 'text-brand-gold'
                  : 'text-brand-gray hover:text-brand-cream'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 mr-2 border-r border-white/10 pr-4">
            <a
              href="https://www.facebook.com/profile.php?id=61577349268004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-cream/60 hover:text-brand-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/thezamoraroom/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-cream/60 hover:text-brand-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
          </div>
          <button
            onClick={() => {
              if (location.pathname === '/') {
                document.querySelector('#stores')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/#stores');
              }
            }}
            className="inline-flex rounded-full items-center gap-2 border border-white/15 text-brand-cream/80 px-4 py-1.5 text-xs font-body tracking-wider uppercase hover:border-brand-gold hover:text-brand-gold transition-all duration-200"
          >
            <MapPin size={12} className="text-brand-gold" />
            Find a Store
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-brand-cream"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1">
            <span className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-black/95 backdrop-blur-md border-t border-white/5"
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`font-body text-sm transition-colors duration-200 ${
                    location.pathname === link.href ? 'text-brand-gold' : 'text-brand-gray hover:text-brand-cream'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  if (location.pathname === '/') {
                    document.querySelector('#stores')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/#stores');
                  }
                }}
                className="inline-flex rounded-full items-center gap-2 border border-white/15 text-brand-cream/80 px-4 py-2 text-xs font-body tracking-wider uppercase w-fit mt-1"
              >
                <MapPin size={12} className="text-brand-gold" />
                Find a Store
              </button>
              
              <div className="flex items-center gap-5 mt-4 pt-4 border-t border-white/5">
                <a
                  href="https://www.facebook.com/profile.php?id=61577349268004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gray hover:text-brand-gold transition-colors duration-200"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/thezamoraroom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gray hover:text-brand-gold transition-colors duration-200"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
