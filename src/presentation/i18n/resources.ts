import enBooks from "~/presentation/i18n/en/books.json";
import deBooks from "~/presentation/i18n/de/books.json";
import { I18N_NAMESPACES, LANGUAGES } from "~/presentation/i18n/config";

export const resources = {
  [LANGUAGES.en]: {
    [I18N_NAMESPACES.books]: enBooks,
  },
  [LANGUAGES.de]: {
    [I18N_NAMESPACES.books]: deBooks,
  },
};
