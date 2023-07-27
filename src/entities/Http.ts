export type HttpRequestConfig = {
  baseURL?: string;
  params?: Record<string, unknown>;
  headers?: {
    [key: string]: string | string[] | number | boolean | null;
  };
};

export interface Http {
  get<T>(url: string, config?: HttpRequestConfig): Promise<T>;
  post<T, R>(url: string, data?: R, config?: HttpRequestConfig): Promise<T>;
  put<T, R>(url: string, data?: R, config?: HttpRequestConfig): Promise<T>;
  patch<T, R>(url: string, data?: R, config?: HttpRequestConfig): Promise<T>;
  delete<T>(url: string, config?: HttpRequestConfig): Promise<T>;
}
