import { FC, Suspense } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { classNames } from "@common/helpers/class-names";
import { useTheme } from "@modules/theme";
import { Navbar } from "@modules/navbar";
import { Sidebar } from "@modules/sidebar";

export const Layout: FC = () => {
  return (
    <div className={classNames("app")}>
      <Suspense fallback={null}>
        <Navbar />

        <div className="content-page">
          <Sidebar />

          <div className="page-wrapper">
            <Outlet />
          </div>
        </div>
      </Suspense>

      <TanStackRouterDevtools />
    </div>
  );
};
