import { Http } from "~/entities/Http";
import { Book } from "~/entities/models/Book";
import { http } from "~/infrastructure/http";

class BooksApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  public async getAll() {
    return this.http.get<Book[]>("/books");
  }
}

export const booksApi = new BooksApi(http);
