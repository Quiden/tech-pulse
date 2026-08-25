import LocalStorageService, { LocalStorageServiceKeys } from '@common/services/local-storage-service';
import { FC, PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';

import { Theme, ThemeContext, ThemeContextType } from './theme-context';

const DEFAULT_THEME: Theme = 'light';

const isTheme = (value: unknown): value is Theme => {
  return value === 'light' || value === 'dark';
};

const getInitialTheme = (): Theme => {
  try {
    const storedTheme = LocalStorageService.get<unknown>(LocalStorageServiceKeys.THEME);

    return isTheme(storedTheme) ? storedTheme : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
};

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  const switchTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    LocalStorageService.set(LocalStorageServiceKeys.THEME, theme);
  }, [theme]);

  const value = useMemo<ThemeContextType>(() => [theme, switchTheme], [theme, switchTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
