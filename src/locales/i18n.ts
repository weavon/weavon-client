import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonTranslationEn from "@/locales/en/common-translation.json";
import joinTranslationEn from "@/locales/en/join-translation.json";
import loginTranslationEn from "@/locales/en/login-translation.json";
import commonTranslationKo from "@/locales/ko/common-translation.json";
import joinTranslationKo from "@/locales/ko/join-translation.json";
import loginTranslationKo from "@/locales/ko/login-translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        common: commonTranslationEn,
        join: joinTranslationEn,
        login: loginTranslationEn,
      },
    },
    ko: {
      translation: {
        common: commonTranslationKo,
        join: joinTranslationKo,
        login: loginTranslationKo,
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
