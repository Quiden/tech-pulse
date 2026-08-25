import { createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

export const appRouter = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof appRouter;
  }
}
