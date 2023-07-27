import { useQuery } from "@tanstack/react-query";
import { httpClient } from "@/api/httpClient";
import { BookSchema } from "@/api/books/Schema";

export async function getAllBooks() {
  const res = await httpClient.get("/books");
  return BookSchema.parse(res.data);
}

export function createAllBooksQueryKey() {
  return ["books/getAll"];
}

export function useAllBooksQuery() {
  return useQuery({
    queryKey: createAllBooksQueryKey(),
    queryFn: getAllBooks,
  });
}
