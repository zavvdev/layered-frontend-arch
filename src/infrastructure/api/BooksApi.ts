import { Book } from "~/entities/Book";
import { Http, http } from "~/infrastructure/http";

export class BooksApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  public async getAll() {
    return this.http.get<Book[]>("/books");
  }
}

export const booksApi = new BooksApi(http);
