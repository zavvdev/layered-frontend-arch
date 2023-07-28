import { useTranslation } from "react-i18next";
import { I18N_NAMESPACES, LANGUAGES } from "~/presentation/i18n/config";
import { Button } from "~/presentation/shared/Button/Button";
import classes from "~/presentation/pages/Books/Books.module.css";

export function Books() {
  const { t, i18n } = useTranslation(I18N_NAMESPACES.books);

  const langToggleMap = {
    [LANGUAGES.de]: LANGUAGES.en,
    [LANGUAGES.en]: LANGUAGES.de,
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h1>{t("label")}</h1>
        <Button
          onClick={() => i18n.changeLanguage(langToggleMap[i18n.language])}
        >
          🌍 {i18n.language}
        </Button>
      </div>
      <hr />
    </div>
  );
}
