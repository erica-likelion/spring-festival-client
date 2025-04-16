import { create } from 'zustand';

export type Direction = 'left' | 'right' | 'center';

interface LayoutState {
  direction: Direction;
}

interface LayoutAction {
  setDirection: (direction: Direction) => void;
}

export const useLayoutStore = create<LayoutState & LayoutAction>()((set) => ({
  direction: 'center',
  setDirection: (direction) => set({ direction: direction }),
}));
