import type { FC } from 'react';

import { classNames } from '@common/helpers/class-names';
import { ButtonLink } from '@common/ui/button-link/button-link';
import { ThemeSwitcher } from '@modules/navbar/ui/theme-switcher/theme-switcher';

import classes from './navbar.module.css';

export interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(classes.navbar, className)}>
      <div className={classes.navbar__links}>
        <ButtonLink theme="secondary" to="/" className="[&.active]:font-bold">
          Home
        </ButtonLink>{' '}
        <ButtonLink theme="secondary" to="/about" className="[&.active]:font-bold">
          About
        </ButtonLink>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
