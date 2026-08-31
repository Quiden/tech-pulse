import { ThemeProvider } from '@modules/theme';
import { RouterProvider } from '@tanstack/react-router';

import './styles/index.css';
import { FC } from 'react';

import { appRouter } from './router/app-router';

export const App: FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
};
