import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJson from "../assets/locale/en.json";
import uaJson from "../assets/locale/ua.json";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: {
    en: enJson,
    lt: uaJson,
  },
  lng: "en",
  fallbackLng: "en",
  debug: true,
  ns: ["common"],
  defaultNS: "common",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    useSuspense: true,
  },
});

export const locale = i18n;
