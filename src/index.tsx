import {createRoot} from 'react-dom/client';
import {createRootRoute, createRoute, createRouter, Link, Outlet, RouterProvider} from "@tanstack/react-router";
import {StrictMode} from "react";
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools";
import {AboutPageAsync} from "./pages/about-page/about-page.async";
import {HomePageAsync} from "./pages/home-page/home-page.async";

const rootRoute = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{' '}
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <HomePageAsync />
})

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: () => <AboutPageAsync />
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    scrollRestoration: true,
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
);