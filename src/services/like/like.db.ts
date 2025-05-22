import { LikeType } from '@/types/like.type';
import { DBSchema, openDB } from 'idb';

export interface LikeDB extends DBSchema {
  like: {
    key: number;
    value: LikeType;
    indexes: { 'by-id': number };
  };
}

export const likeDB = openDB<LikeDB>('like-db', 2, {
  upgrade(db) {
    const waitingStore = db.createObjectStore('like', { keyPath: 'id' });
    waitingStore.createIndex('by-id', 'id');
  },
});

export const getLikesDB = async () => {
  const db = await likeDB;
  const allLikes = await db.getAll('like');
  return allLikes;
};

export const updateLikeCountDB = async (id: number, newCount: number) => {
  const db = await likeDB;
  const like = await db.get('like', id);
  if (like) {
    like.updateCount = newCount;
    await db.put('like', like);
  }
};
