import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: !!localStorage.getItem('access_token'), // 앱 처음 실행할 때 기준
  setLoggedIn: (value) => set({ isLoggedIn: value }),
  logout: () => {
    localStorage.removeItem('access_token');
    set({ isLoggedIn: false });
  },
}));
