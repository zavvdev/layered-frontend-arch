import { z } from "zod";

export const BookSchema = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  date: z.string(),
  price: z.string(),
  cover_url: z.string(),
});

export type Book = z.infer<typeof BookSchema>;
