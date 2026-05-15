import { Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import LandingPage from './pages/LandingPage';
import MenuPage from './pages/landinpage/MenuPage';
import MerchandisePage from './pages/landinpage/MerchandisePage';
import LoginPage from './pages/admin/LoginPage';
import DashboardPage from './pages/admin/DashboardPage';
import ProtectedRoute from './components/admin/ProtectedRoute';

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/merchandise" element={<MerchandisePage />} />
      </Route>

      {/* Admin routes */}
      <Route path="/admin/login" element={<LoginPage />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <DashboardPage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route path="/admin" element={<LoginPage />} />
    </Routes>
  );
}
