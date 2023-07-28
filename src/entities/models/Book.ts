import * as yup from "yup";

export const BookSchema = yup.object({
  id: yup.number().required(),
  title: yup.string().required(),
  author: yup.string().required(),
  date: yup.string().required(),
  price: yup.string().required(),
  coverUrl: yup.string().nullable(),
});

export type Book = yup.InferType<typeof BookSchema>;
