import { classNames } from '@common/helpers/class-names';
import { Navbar } from '@modules/navbar';
import { PageLoader } from '@modules/page-loader';
import { Sidebar } from '@modules/sidebar';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { FC, Suspense } from 'react';

export const Layout: FC = () => {
  return (
    <div className={classNames('app')}>
      <Navbar />

      <div className="content-page">
        <Sidebar />

        <div className="page-wrapper">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>

      <TanStackRouterDevtools />
    </div>
  );
};
