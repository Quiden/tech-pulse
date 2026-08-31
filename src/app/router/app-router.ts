import { PageError } from '@modules/page-error';
import { PageLoader } from '@modules/page-loader';
import { NotFoundPage } from '@pages/not-found-page';
import { createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

export const appRouter = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultNotFoundComponent: NotFoundPage,
  defaultPendingComponent: PageLoader,
  defaultErrorComponent: PageError,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof appRouter;
  }
}
