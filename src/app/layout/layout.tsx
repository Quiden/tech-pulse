import { FC } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { classNames } from "@common/helpers/class-names";
import { useTheme } from "@modules/theme";

export const Layout: FC = () => {
  const [, switchTheme] = useTheme();

  return (
    <div className={classNames("app")}>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <button type="button" onClick={switchTheme}>
          Изменить тему
        </button>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
};
