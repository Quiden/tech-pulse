export const LocalStorageServiceKeys = {
  THEME: 'theme',
} as const;

export type LocalStorageServiceKeys =
  (typeof LocalStorageServiceKeys)[keyof typeof LocalStorageServiceKeys];

class LocalStorageService {
  get<T>(key: LocalStorageServiceKeys | string): T | null {
    const item = localStorage.getItem(key);

    return  item === null ? null : JSON.parse(item);
  }

  set<T>(key: LocalStorageServiceKeys | string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: LocalStorageServiceKeys | string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}

export default new LocalStorageService();
