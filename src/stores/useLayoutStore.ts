import { create } from 'zustand';

interface LayoutState {
  isNav: boolean;
}

interface LayoutAction {
  setIsNav: (state: boolean) => void;
}

export const useLayoutStore = create<LayoutState & LayoutAction>()((set) => ({
  isNav: true,
  setIsNav: (state) => set({ isNav: state }),
}));
