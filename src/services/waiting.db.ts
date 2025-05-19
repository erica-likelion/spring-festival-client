import { UserWaitingType } from '@/types/waiting.type';
import { DBSchema, openDB } from 'idb';

export interface WaitingDB extends DBSchema {
  waiting: {
    key: number;
    value: UserWaitingType;
    indexes: { 'by-WaitingId': number };
  };
}

export const waitingDB = openDB<WaitingDB>('client-db', 1, {
  upgrade(db) {
    const waitingStore = db.createObjectStore('waiting', { keyPath: 'waitingId' });
    waitingStore.createIndex('by-WaitingId', 'waitingId');
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
