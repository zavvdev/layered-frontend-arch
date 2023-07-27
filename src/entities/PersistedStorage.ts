export interface PersistedStorage {
  get(key: string): unknown | null;
  put<T>(key: string, value: T): void;
  remove(key: string): void;
  clear(): void;
}
