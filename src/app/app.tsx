import { FC } from "react";
import { createRootRoute, createRoute, createRouter, RouterProvider } from "@tanstack/react-router";
import { ThemeProvider } from "@modules/theme";
import { Layout } from "./layout/layout";
import { HomePage } from "@pages/home-page";
import { AboutPage } from "@pages/about-page";
import "./styles/index.css";

const rootRoute = createRootRoute({
  component: () => <Layout />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <HomePage />,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => <AboutPage />,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

export const App: FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
