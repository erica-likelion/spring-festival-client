import { UserWaitingType } from '@/types/waiting.type';
import { DBSchema, openDB } from 'idb';

export interface WaitingDB extends DBSchema {
  waiting: {
    key: number;
    value: UserWaitingType;
    indexes: { 'by-pubId': number };
  };
}

export const waitingDB = openDB<WaitingDB>('client-db', 1, {
  upgrade(db) {
    const waitingStore = db.createObjectStore('waiting', { keyPath: 'pubId' });
    waitingStore.createIndex('by-pubId', 'pubId', { unique: true });
  },
});

export const putWaitingsDB = async (waiting: UserWaitingType) => {
  const db = await waitingDB;
  await db.put('waiting', waiting);
};

export const getWaitingsDB = async () => {
  const db = await waitingDB;
  const allWaitings = await db.getAll('waiting');
  return allWaitings;
};

export const deleteWaitingsDB = async (id: number) => {
  const db = await waitingDB;
  await db.delete('waiting', id);
};

export const clearWaitingsDB = async () => {
  const db = await waitingDB;
  await db.clear('waiting');
};
