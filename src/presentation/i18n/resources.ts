import enDashboard from "~/presentation/i18n/en/dashboard.json";
import deDashboard from "~/presentation/i18n/de/dashboard.json";
import { I18N_NAMESPACES, LANGUAGES } from "~/presentation/i18n/config";

export const resources = {
  [LANGUAGES.en]: {
    [I18N_NAMESPACES.dashboard]: enDashboard,
  },
  [LANGUAGES.de]: {
    [I18N_NAMESPACES.dashboard]: deDashboard,
  },
};
