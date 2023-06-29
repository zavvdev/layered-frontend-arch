import { useQuery } from "@tanstack/react-query";
import { httpClient } from "@/api/client";

export function createAllBooksQueryKey() {
  return ["books/all"];
}

export function useAllBooksQuery({ options = {} } = {}) {
  return useQuery({
    queryKey: createAllBooksQueryKey(),
    queryFn: async () => {
      const res = await httpClient.get("/books");
      return res;
    },
    ...options,
  });
}
