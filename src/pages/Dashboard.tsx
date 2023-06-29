import { useAllBooksQuery } from "@/api/books/useAllBooksQuery";

export function Dashboard() {
  const data = useAllBooksQuery();

  console.log(data);

  return <>123</>;
}
