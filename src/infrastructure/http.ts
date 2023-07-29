import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Http as HttpEntity, HttpRequestConfig } from "~/entities/Http";

class Http implements HttpEntity {
  private repo: AxiosInstance;

  constructor(repo: AxiosInstance) {
    this.repo = repo;
  }

  private reqConfigAdapter(reqConfig?: HttpRequestConfig): AxiosRequestConfig {
    return {
      baseURL: reqConfig?.baseURL,
      headers: reqConfig?.headers,
      params: reqConfig?.params,
    };
  }

  public async get<T>(url: string, config?: HttpRequestConfig): Promise<T> {
    const res = await this.repo.get<T>(url, this.reqConfigAdapter(config));
    return res.data;
  }

  public async post<T, R>(
    url: string,
    data: R,
    config?: HttpRequestConfig,
  ): Promise<T> {
    const res = await this.repo.post<T>(
      url,
      data,
      this.reqConfigAdapter(config),
    );
    return res.data;
  }

  public async put<T, R>(
    url: string,
    data: R,
    config?: HttpRequestConfig,
  ): Promise<T> {
    const res = await this.repo.put<T>(
      url,
      data,
      this.reqConfigAdapter(config),
    );
    return res.data;
  }

  public async patch<T, R>(
    url: string,
    data: R,
    config?: HttpRequestConfig,
  ): Promise<T> {
    const res = await this.repo.patch<T>(
      url,
      data,
      this.reqConfigAdapter(config),
    );
    return res.data;
  }

  public async delete<T>(url: string, config?: HttpRequestConfig): Promise<T> {
    const res = await this.repo.delete<T>(url, this.reqConfigAdapter(config));
    return res.data;
  }
}

export const http = new Http(
  axios.create({
    baseURL: import.meta.env.VITE_HTTP_BASE_URL,
  }),
);
