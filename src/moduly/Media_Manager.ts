import { openDB, IDBPDatabase } from 'idb';

const DB_NAME = 'piktos_media';
const STORE_NAME = 'custom_cards';

export interface CustomCard {
  id: string;
  label: string;
  imageBlob: Blob;
  audioBlob?: Blob;
  createdAt: number;
}

let dbPromise: Promise<IDBPDatabase> | null = null;

const getDB = () => {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, 1, {
      upgrade(db) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      },
    });
  }
  return dbPromise;
};

export const saveCustomCard = async (card: CustomCard) => {
  const db = await getDB();
  await db.put(STORE_NAME, card);
};

export const getAllCustomCards = async (): Promise<CustomCard[]> => {
  const db = await getDB();
  return db.getAll(STORE_NAME);
};

export const deleteCustomCard = async (id: string) => {
  const db = await getDB();
  await db.delete(STORE_NAME, id);
};
