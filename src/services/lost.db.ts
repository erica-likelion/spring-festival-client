import { DBSchema } from 'idb';

interface LostType {
  id: number;
  itemType: string;
}
export interface LostDB extends DBSchema {
  lost: {
    key: number;
    value: LostType;
    indexes: { 'by-lostNum': number };
  };
}
