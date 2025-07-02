import { decrypt, encrypt } from "@/utils/encryptUtils";

const encryptLocalService = {
  getItem: (name: string) => {
    const item = localStorage.getItem(name);

    if (item) {
      return decrypt(item);
    }

    return null;
  },
  setItem: (name: string, value: string) => {
    const cipherText = encrypt(value);
    localStorage.setItem(name, cipherText);
  },
  removeItem: (name: string) => {
    localStorage.removeItem(name);
  },
};

export default encryptLocalService;
