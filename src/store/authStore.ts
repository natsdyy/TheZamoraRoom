import { create } from 'zustand';

const ADMIN_PASSWORD = 'zamoracheckout2937';
const AUTH_KEY = 'zamora_auth';

interface AuthState {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  checkSession: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: sessionStorage.getItem(AUTH_KEY) === 'true',

  login: (password: string) => {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, 'true');
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },

  logout: () => {
    sessionStorage.removeItem(AUTH_KEY);
    set({ isAuthenticated: false });
  },

  checkSession: () => {
    const isAuth = sessionStorage.getItem(AUTH_KEY) === 'true';
    set({ isAuthenticated: isAuth });
  },
}));
