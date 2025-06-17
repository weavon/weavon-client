import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonTranslationEn from "@/locales/en/common-translation.json";
import commonTranslationKo from "@/locales/ko/common-translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: commonTranslationEn,
    },
    ko: {
      common: commonTranslationKo,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
