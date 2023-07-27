import { useTranslation } from "react-i18next";
import { I18N_NAMESPACES, LANGUAGES } from "~/presentation/i18n/config";
import { Button } from "~/presentation/shared/Button/Button";

export function Dashboard() {
  const { t, i18n } = useTranslation(I18N_NAMESPACES.dashboard);

  return (
    <div>
      <h1>{t("label")}</h1>
      <Button onClick={() => i18n.changeLanguage(LANGUAGES.en)}>EN</Button>
      <Button onClick={() => i18n.changeLanguage(LANGUAGES.de)}>DE</Button>
    </div>
  );
}
