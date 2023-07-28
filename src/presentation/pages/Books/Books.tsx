import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { I18N_NAMESPACES } from "~/presentation/i18n/config";
import classes from "~/presentation/pages/Books/Books.module.css";
import { booksStore } from "~/application/BooksStore";
import { useEffect } from "react";
import { AuthorsFilter } from "~/presentation/pages/Books/shared/AuthorsFilter";
import { Book } from "~/presentation/pages/Books/shared/Book";
import { LangToggle } from "~/presentation/pages/Books/shared/LangToggle";

export const Books = observer(() => {
  const { t } = useTranslation(I18N_NAMESPACES.books);

  const isLoading = booksStore.isBooksFetching;
  const isVisible = booksStore.books.length > 0 && !isLoading;
  const isEmpty = booksStore.books.length === 0 && !isLoading;

  useEffect(() => {
    booksStore.fetchBooks();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headerLeft}>
          <h1>{t("label")}</h1>
          {isVisible && <AuthorsFilter />}
        </div>
        <LangToggle />
      </div>
      <hr />
      <div className={classes.content}>
        {isEmpty && <div>{t("empty")}</div>}
        {isLoading && <div>{t("loading")}</div>}
        {isVisible &&
          booksStore.filteredBooks.map((book) => (
            <Book
              key={book.id}
              cover={book.cover}
              title={book.title}
              meta={book.meta}
              price={book.price}
            />
          ))}
      </div>
    </div>
  );
});
