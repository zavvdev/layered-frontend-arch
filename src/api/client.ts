import axios from "axios";
import { QueryClient } from "@tanstack/react-query";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_HTTP_BASE_URL,
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 3 * 60 * 1000,
      cacheTime: 4 * 60 * 1000,
    },
  },
});
