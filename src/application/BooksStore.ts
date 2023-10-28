import { makeObservable, observable, action, computed } from "mobx";
import { Book } from "~/entities/Book";
import { BooksApi, booksApi } from "~/infrastructure/api/BooksApi";
import {
  PersistedStorage,
  persistedStorage,
} from "~/infrastructure/persistedStorage";

interface Args {
  api: BooksApi;
  storage: PersistedStorage;
}

class BooksStore {
  private api: BooksApi;
  private storage: PersistedStorage;
  private STORAGE_AUTHOR_FILTER_KEY = "authorFilter";

  books: Book[] = [];
  authorFilter: string;
  isFetching = false;
  AUTHOR_FILTER_DEFAULT = "";

  constructor({ api, storage }: Args) {
    makeObservable(this, {
      books: observable,
      authorFilter: observable,
      isFetching: observable,

      bookAuthors: computed,
      filteredBooks: computed,
      isEmpty: computed,
      isSettled: computed,

      changeAuthorFilter: action,
      fetchBooks: action,
    });

    this.api = api;
    this.storage = storage;

    const storedAuthorFilter = this.storage.get(
      this.STORAGE_AUTHOR_FILTER_KEY,
    ) as string;

    this.authorFilter = storedAuthorFilter || this.AUTHOR_FILTER_DEFAULT;
  }

  get bookAuthors() {
    const authors = this.books.map((book) => book.author);
    const uniqueAuthors = new Set(authors);
    return Array.from(uniqueAuthors);
  }

  get filteredBooks() {
    if (this.bookAuthors.includes(this.authorFilter)) {
      return this.books.filter((book) => book.author === this.authorFilter);
    }
    return this.books;
  }

  get isEmpty() {
    return this.books.length === 0 && !this.isFetching;
  }

  get isSettled() {
    return this.books.length > 0 && !this.isFetching;
  }

  changeAuthorFilter(nextAuthorFilter: string) {
    this.storage.put(this.STORAGE_AUTHOR_FILTER_KEY, nextAuthorFilter);
    this.authorFilter = nextAuthorFilter;
  }

  async fetchBooks() {
    this.isFetching = true;
    const books = await this.api.getAll();
    this.books = books;
    this.isFetching = false;
  }
}

export const booksStore = new BooksStore({
  api: booksApi,
  storage: persistedStorage,
});
