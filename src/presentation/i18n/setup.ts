import { init, use } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import {
  DEFAULT_LANGUAGE,
  I18N_LOCAL_STORAGE_KEY,
  LANGUAGES,
} from "~/presentation/i18n/config";
import { resources } from "~/presentation/i18n/resources";
import { persistedStorage } from "~/infrastructure/persistedStorage";

const languageDetector = new LanguageDetector();

languageDetector.addDetector({
  name: "languageDetector",
  lookup() {
    let appLanguage = DEFAULT_LANGUAGE;

    const locale = window.navigator.language;
    const localeShort = locale.split(/_|-/)[0];
    const storeLang = persistedStorage.get(I18N_LOCAL_STORAGE_KEY);

    const isPresent = Object.values(LANGUAGES).find(
      (item) => item === localeShort,
    );

    if (typeof storeLang === "string") {
      appLanguage = storeLang;
    } else if (isPresent) {
      appLanguage = localeShort;
    }

    return appLanguage;
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
    order: ["languageDetector", "localStorage"],
  },
});
