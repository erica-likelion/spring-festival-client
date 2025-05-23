import { create } from 'zustand';
import { LikeType } from '@/types/like.type';
import { BOOTH_LIST_LIKECOUNT } from '@/constants/booth/booth';
import { getLikesDB, likeDB, updateLikeCountDB } from '@/services/like/like.db';
import { getLikes } from '@/services/like/like';
import { getWaitingCount } from '@/services/waiting/waiting';

export interface LikeStore {
  likes: LikeType[];
  initLikes: () => Promise<void>;
  fetchWaitingCounts: () => Promise<void>;
  fetchLikes: (serverData: LikeType[]) => Promise<void>;
  updateLikeCount: (id: number, newCount: number) => Promise<void>;
  getUpdatedLikes: () => Promise<Pick<LikeType, 'id' | 'likeCount'>[]>;
  resetUpdateCounts: () => Promise<void>;
}

export const useLikeStore = create<LikeStore>((set) => ({
  likes: [...BOOTH_LIST_LIKECOUNT],
  initLikes: async () => {
    try {
      const response = await getLikes();
      const data = response.data ? response.data : BOOTH_LIST_LIKECOUNT;
      const dataWithUpdateCount = data.map((item: LikeType) => ({
        ...item,
        updateCount: 0,
      }));
      const db = await likeDB;
      const tx = db.transaction('like', 'readwrite');

      for (const like of dataWithUpdateCount) {
        await tx.store.put(like);
      }

      await tx.done;
      set({ likes: dataWithUpdateCount });
    } catch (error) {
      console.error('Error initializing likes:', error);
    }
  },
  fetchWaitingCounts: async () => {
    try {
      const response = await getWaitingCount();
      const waitingCounts = response.data;
      const db = await likeDB;
      const tx = db.transaction('like', 'readwrite');
      const store = tx.store;

      for (const like of waitingCounts) {
        const likeData = await store.get(like.id);
        if (likeData) {
          likeData.waitingCount = like.waitingCount;
          await store.put(likeData);
        }
      }

      await tx.done;

      const updatedLikes = await getLikesDB();
      set({ likes: updatedLikes });
    } catch (error) {
      console.error('Error initializing waiting counts:', error);
    }
  },
  fetchLikes: async (serverData: LikeType[]) => {
    const db = await likeDB;

    const oldData = await db.getAll('like');
    const prevMap = new Map<number, LikeType>();
    oldData.forEach((item) => {
      if (item.currentRank !== undefined) {
        prevMap.set(item.id, item);
      }
    });

    const sorted = [...serverData].sort((a, b) => b.likeCount - a.likeCount);
    const newData: LikeType[] = sorted.map((item, index) => {
      const prev = prevMap.get(item.id);
      return {
        id: item.id,
        likeCount: item.likeCount,
        prevRank: prev?.currentRank ?? index + 1,
        currentRank: index + 1,
        updateCount: item.updateCount || 0,
      };
    });

    const tx = db.transaction('like', 'readwrite');
    await tx.store.clear();
    for (const item of newData) {
      await tx.store.put(item);
    }
    await tx.done;
    set({ likes: newData });
  },

  updateLikeCount: async (id, newCount) => {
    await updateLikeCountDB(id, newCount);
    const updated = await getLikesDB();
    set({ likes: updated });
  },
  getUpdatedLikes: async () => {
    const db = await likeDB;
    const allLikes = await db.getAll('like');

    const nonZeroUpdateList = allLikes
      .filter((like) => like.updateCount !== 0)
      .map((like) => ({
        id: like.id,
        likeCount: like.updateCount!,
      }));
    return nonZeroUpdateList;
  },

  resetUpdateCounts: async () => {
    const db = await likeDB;
    const allLikes = await db.getAll('like');

    const tx = db.transaction('like', 'readwrite');
    for (const like of allLikes) {
      like.updateCount = 0;
      await tx.store.put(like);
    }
    await tx.done;

    set({ likes: [...allLikes.map((l) => ({ ...l, updateCount: 0 }))] });
  },
}));
