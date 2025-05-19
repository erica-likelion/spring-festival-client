import { create } from 'zustand';
import { UserWaitingType } from '@/types/waiting.type';
import { putWaitingsDB, getWaitingsDB, deleteWaitingsDB } from '@/services/waiting.db';
import { getWaitings, deleteWaitings } from '@/services/waiting';

interface WaitingStore {
  waitings: UserWaitingType[];
  fetchWaitings: () => Promise<void>;
  addWaiting: (waiting: UserWaitingType) => Promise<void>;
  deleteWaiting: (id: number) => Promise<void>;
  loadWaitings: () => Promise<void>;
  hasPubId: (pubId: number) => boolean;
}

export const useWaitingStore = create<WaitingStore>((set, get) => ({
  waitings: [],
  fetchWaitings: async () => {
    const data = await getWaitingsDB();
    set({ waitings: data });
  },

  addWaiting: async (waiting) => {
    await putWaitingsDB(waiting);
    const updated = await getWaitingsDB(); // 새로 불러오기
    set({ waitings: updated });
  },
  deleteWaiting: async (id) => {
    await deleteWaitingsDB(id);
    await deleteWaitings(id);
    const updated = await getWaitingsDB(); // 새로 불러오기
    set({ waitings: updated });
  },
  loadWaitings: async () => {
    const response = await getWaitings();
    if (response.status === 200) {
      const waitings = response.data;
      set({ waitings });
      for (const waiting of waitings) {
        await putWaitingsDB(waiting);
      }
    }
  },
  hasPubId: (pubId: number) => {
    const state = get();
    return state.waitings.some((w) => w.pubId === pubId);
  },
}));
