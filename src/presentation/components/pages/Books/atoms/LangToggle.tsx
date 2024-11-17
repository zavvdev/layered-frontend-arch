import { useTranslation } from "react-i18next";
import { I18N_NAMESPACES, LANGUAGES } from "~/presentation/i18n/config";
import { Button } from "~/presentation/components/atoms/Button";

export function LangToggle() {
  const { i18n } = useTranslation(I18N_NAMESPACES.books);

  const langToggleMap = {
    [LANGUAGES.de]: LANGUAGES.en,
    [LANGUAGES.en]: LANGUAGES.de,
  };

  return (
    <Button onClick={() => i18n.changeLanguage(langToggleMap[i18n.language])}>
      🌍 {i18n.language}
    </Button>
  );
}
