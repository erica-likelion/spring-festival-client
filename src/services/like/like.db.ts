import { LikeType } from '@/types/like.type';
import { DBSchema, openDB } from 'idb';

export interface LikeDB extends DBSchema {
  like: {
    key: number;
    value: LikeType;
    indexes: { 'by-id': number };
  };
}

export const likeDB = openDB<LikeDB>('like-db', 1, {
  upgrade(db) {
    const waitingStore = db.createObjectStore('like', { keyPath: 'id' });
    waitingStore.createIndex('by-id', 'id');
  },
});

export const putLikesDB = async (like: LikeType) => {
  const db = await likeDB;
  await db.put('like', like);
};

export const getLikesDB = async () => {
  const db = await likeDB;
  const allLikes = await db.getAll('like');
  return allLikes;
};
