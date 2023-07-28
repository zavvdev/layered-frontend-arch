import { init, use } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { DEFAULT_LANGUAGE, LANGUAGES } from "~/presentation/i18n/config";
import { resources } from "~/presentation/i18n/resources";

const languageDetector = new LanguageDetector();

languageDetector.addDetector({
  name: "languageDetector",
  lookup() {
    const detectedLang = window.navigator.language.split(/_|-/)[0];
    return Object.values(LANGUAGES).includes(detectedLang)
      ? detectedLang
      : DEFAULT_LANGUAGE;
  },
});

use(languageDetector);
use(initReactI18next);

init({
  resources,
  fallbackLng: DEFAULT_LANGUAGE,
  react: {
    useSuspense: true,
  },
  detection: {
    order: ["localStorage", "languageDetector"],
  },
});
