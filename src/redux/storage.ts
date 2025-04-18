import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve();
    },
    setItem(_key: string, value: string) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("session")
    : createNoopStorage();

export default storage;

export const storageLocal =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();
