import { Http } from "~/entities/Http";
import { Book, BookSchema } from "~/entities/models/Book";
import { http } from "~/infrastructure/http";

class BooksApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  public async getAll(): Promise<Book[]> {
    const res = await this.http.get<Record<string, unknown>[]>("/books");
    return res.map((book) => {
      return BookSchema.validateSync(
        {
          id: book.id,
          title: book.title,
          author: book.author,
          date: book.date,
          price: book.price,
          coverUrl: book?.cover_url || null,
        },
        {
          strict: true,
        },
      );
    });
  }
}

export const booksApi = new BooksApi(http);
