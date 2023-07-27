import { PersistedStorage as PersistedStorageInterface } from "~/entities/PersistedStorage";

class PersistedStorage implements PersistedStorageInterface {
  private repo: Storage;

  constructor(repo: Storage) {
    this.repo = repo;
  }

  public get(key: string): unknown | null {
    const item = this.repo.getItem(key);
    try {
      if (item) {
        return JSON.parse(item) as unknown;
      }
    } catch {
      return item || null;
    }
  }

  public put<T>(key: string, value: T): void {
    this.repo.setItem(key, JSON.stringify(value));
  }

  public remove(key: string): void {
    this.repo.removeItem(key);
  }

  public clear(): void {
    this.repo.clear();
  }
}

export const persistedStorage = new PersistedStorage(window.localStorage);
