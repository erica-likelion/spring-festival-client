import { create } from 'zustand';
import { LikeType } from '@/types/like.type';
import { BOOTH_LIST_LIKECOUNT } from '@/constants/booth/booth';
import { getLikesDB, putLikesDB } from '@/services/like/like.db';

export interface LikeStore {
  likes: LikeType[];
  initLikes: () => Promise<void>;
  fetchLikes: () => Promise<void>;
  addLike: (like: LikeType) => Promise<void>;
}

export const useLikeStore = create<LikeStore>((set) => ({
  likes: [...BOOTH_LIST_LIKECOUNT],
  initLikes: async () => {
    const existing = await getLikesDB();
    if (existing.length === 0) {
      for (const like of BOOTH_LIST_LIKECOUNT) {
        await putLikesDB(like);
      }
      set({ likes: [...BOOTH_LIST_LIKECOUNT] });
    } else {
      set({ likes: existing });
    }
  },
  fetchLikes: async () => {
    const data = await getLikesDB();
    set({ likes: data });
  },
  addLike: async (like) => {
    await putLikesDB(like);
    const updated = await getLikesDB(); // 새로 불러오기
    set({ likes: updated });
  },
}));
