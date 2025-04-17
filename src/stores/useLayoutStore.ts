import { create } from 'zustand';

export type Direction = 'left' | 'right' | 'center';

interface LayoutState {
  direction: Direction;
  isNav: boolean;
}

interface LayoutAction {
  setDirection: (direction: Direction) => void;
  setIsNav: (state: boolean) => void;
}

export const useLayoutStore = create<LayoutState & LayoutAction>()((set) => ({
  direction: 'center',
  isNav: true,
  setDirection: (direction) => set({ direction: direction }),
  setIsNav: (state) => set({ isNav: state }),
}));
