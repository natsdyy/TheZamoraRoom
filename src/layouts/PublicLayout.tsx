import { Outlet } from 'react-router-dom';
import Header from '../pages/landingpage/sections/Header';
import { useContentProtection } from '../hooks/useContentProtection';

export default function PublicLayout() {
  // Activate global content protection (disables right-click and common keyboard shortcuts on all public pages)
  useContentProtection();

  return (
    <div className="min-h-screen bg-brand-black text-brand-cream">
      <Header />
      <Outlet />
    </div>
  );
}

