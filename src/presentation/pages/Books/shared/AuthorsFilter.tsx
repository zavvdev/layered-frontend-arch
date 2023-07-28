import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { booksStore } from "~/application/BooksStore";
import { I18N_NAMESPACES } from "~/presentation/i18n/config";

export const AuthorsFilter = observer(() => {
  const { t } = useTranslation(I18N_NAMESPACES.books);

  return (
    <div>
      {t("filter.authors")}
      <select
        value={booksStore.authorFilter}
        onChange={(e) => booksStore.changeAuthorFilter(e.target.value)}
      >
        <option value={booksStore.AUTHOR_FILTER_DEFAULT}>
          {t("filter.authorsSelect")}
        </option>
        {booksStore.bookAuthors.map((author) => (
          <option key={author} value={author}>
            {author}
          </option>
        ))}
      </select>
    </div>
  );
});
