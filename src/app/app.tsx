import { ThemeProvider } from '@modules/theme';
import { RouterProvider } from '@tanstack/react-router';
import { FC } from 'react';

import './styles/index.css';
import { appRouter } from './router/app-router';

export const App: FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
};
