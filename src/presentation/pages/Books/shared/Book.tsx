import { Book as BookEntity } from "~/application/BooksStore";

interface Props {
  book: BookEntity;
}

export function Book({ book }: Props) {
  return (
    <div>
      <img src={book.coverUrl || ""} alt={book.title} width={300} />
      <h3>{book.title}</h3>
      <i>
        {book.author} | {book.date}
      </i>
      <div>
        <b>{book.price}</b>
      </div>
      <hr />
    </div>
  );
}
