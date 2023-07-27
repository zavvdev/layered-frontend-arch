import axios from "axios";
import { HTTP_BASE_URL } from "@/api/config";

export const httpClient = axios.create({
  baseURL: HTTP_BASE_URL,
});
