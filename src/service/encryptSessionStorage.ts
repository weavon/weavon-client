import { decrypt, encrypt } from "@/utils/encryptUtils";

const encryptSessionStorage = {
  getItem: (name: string): string | null => {
    const item = sessionStorage.getItem(name);

    if (item) {
      return decrypt(item) as string;
    }

    return null;
  },
  setItem: (name: string, value: string): void => {
    const cipherText = encrypt(value);
    sessionStorage.setItem(name, cipherText);
  },
  removeItem: (name: string): void => {
    sessionStorage.removeItem(name);
  },
};

export default encryptSessionStorage;
