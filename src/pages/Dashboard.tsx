// import { useAllBooksQuery } from "@/api/books/getAll";
import { z } from "zod";

const schema = z.object({
  username: z.string(),
});

export function Dashboard() {
  // const data = useAllBooksQuery();

  return (
    <>
      {JSON.stringify(
        schema.parse({
          username: "123",
        }),
      )}
    </>
  );
}
