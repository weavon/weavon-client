import CryptoJS from "crypto-js";

import { CRYPTO_KEY } from "@/constants/APP";

export function encrypt(plainValue: unknown): string {
  const plainText = JSON.stringify(plainValue);
  const cipherValue = CryptoJS.AES.encrypt(plainText, CRYPTO_KEY);
  return cipherValue.toString();
}

export function decrypt(cipherText: string): unknown {
  const plainText = CryptoJS.AES.decrypt(cipherText, CRYPTO_KEY);
  return JSON.parse(plainText.toString(CryptoJS.enc.Utf8));
}
