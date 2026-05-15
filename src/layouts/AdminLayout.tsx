import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import type { ReactNode } from 'react';
import {
  LayoutDashboard,
  Image,
  MessageSquareQuote,
  ShoppingBag,
  MapPin,
  LogOut,
  Sparkles,
} from 'lucide-react';

const sidebarLinks = [
  { label: 'Hero', section: 'hero', icon: Sparkles },
  { label: 'Moments', section: 'moments', icon: Image },
  { label: 'Testimonials', section: 'testimonials', icon: MessageSquareQuote },
  { label: 'Merchandise', section: 'merch', icon: ShoppingBag },
  { label: 'Stores', section: 'stores', icon: MapPin },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const handleTabClick = (section: string) => {
    navigate(`/admin/dashboard?tab=${section}`);
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-cream flex">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-dark border-r border-white/5 flex flex-col shrink-0 fixed top-0 left-0 h-full">
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <LayoutDashboard size={20} className="text-brand-gold" />
            <span className="font-display text-xl tracking-wider">ADMIN</span>
          </div>
          <p className="text-xs text-brand-gray font-body mt-1">The Zamora Room</p>
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-1">
          {sidebarLinks.map((link) => (
            <button
              key={link.section}
              onClick={() => handleTabClick(link.section)}
              className="flex items-center gap-3 px-4 py-2.5 font-body text-sm transition-all duration-200 text-brand-gray hover:text-brand-cream hover:bg-white/5 text-left w-full"
            >
              <link.icon size={18} />
              {link.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2.5 font-body text-sm text-red-400 hover:text-red-300 hover:bg-red-500/5 transition-all duration-200 w-full"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
