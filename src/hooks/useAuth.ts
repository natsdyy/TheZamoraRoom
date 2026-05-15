import { useAuthStore } from '../store/authStore';

export const useAuth = () => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const login = useAuthStore((s) => s.login);
  const logout = useAuthStore((s) => s.logout);
  const checkSession = useAuthStore((s) => s.checkSession);

  return { isAuthenticated, login, logout, checkSession };
};
