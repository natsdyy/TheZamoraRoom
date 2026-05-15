import { Outlet } from 'react-router-dom';
import Header from '../pages/landinpage/sections/Header';

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-cream">
      <Header />
      <Outlet />
    </div>
  );
}
