import { makeObservable, observable, action, computed } from "mobx";
import { Book } from "~/entities/models/Book";
import { booksApi } from "~/infrastructure/api/BooksApi";

class BooksStore {
  public AUTHOR_FILTER_DEFAULT = "";

  public authorFilter = this.AUTHOR_FILTER_DEFAULT;
  public books: Book[] = [];

  public isBooksFetching = false;

  constructor() {
    makeObservable(this, {
      authorFilter: observable,
      isBooksFetching: observable,

      bookAuthors: computed,
      filteredBooks: computed,

      changeAuthorFilter: action,
      fetchBooks: action,
    });
  }

  get bookAuthors() {
    const authors = this.books.map((book) => book.author);
    const uniqueAuthors = new Set(authors);
    return Array.from(uniqueAuthors);
  }

  get filteredBooks() {
    let result = [];

    if (this.authorFilter === this.AUTHOR_FILTER_DEFAULT) {
      result = this.books;
    } else {
      result = this.books.filter((book) => book.author === this.authorFilter);
    }

    return result.map((book) => ({
      id: book.id,
      cover: book.coverUrl || "",
      title: book.title,
      meta: `${book.author} | ${book.date}`,
      price: book.price,
    }));
  }

  changeAuthorFilter(nextAuthorFilter: string) {
    this.authorFilter = nextAuthorFilter;
  }

  async fetchBooks() {
    this.isBooksFetching = true;
    const books = await booksApi.getAll();
    this.books = books;
    this.isBooksFetching = false;
  }
}

export const booksStore = new BooksStore();
