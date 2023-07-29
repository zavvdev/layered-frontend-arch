import { useEffect } from "react";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { I18N_NAMESPACES } from "~/presentation/i18n/config";
import classes from "~/presentation/pages/Books/Books.module.css";
import { booksStore } from "~/application/BooksStore";
import { AuthorsFilter } from "~/presentation/pages/Books/shared/AuthorsFilter";
import { Book } from "~/presentation/pages/Books/shared/Book";
import { LangToggle } from "~/presentation/pages/Books/shared/LangToggle";

export const Books = observer(() => {
  const { t } = useTranslation(I18N_NAMESPACES.books);

  useEffect(() => {
    booksStore.fetchBooks();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headerLeft}>
          <h1>{t("label")}</h1>
          {booksStore.isSettled && <AuthorsFilter />}
        </div>
        <LangToggle />
      </div>
      <hr />
      <div className={classes.content}>
        {booksStore.isEmpty && <div>{t("empty")}</div>}
        {booksStore.isFetching && <div>{t("loading")}</div>}
        {booksStore.isSettled &&
          booksStore.filteredBooks.map((book) => (
            <Book key={book.id} book={book} />
          ))}
      </div>
    </div>
  );
});
