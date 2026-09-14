import type { FC } from 'react';

import { classNames } from '@common/helpers/class-names';
import { Button } from '@common/ui/button';
import { ThemeSwitcher } from '@modules/header/ui/theme-switcher/theme-switcher';
import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import classes from './header.module.css';

export interface NavbarProps {
  className?: string;
}

export const Header: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <header className={classNames(classes.header, className)}>
      <Button>
        <svg
          data-dc-tpl="7"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path data-dc-tpl="8" d="M3 6h18M3 12h18M3 18h18"></path>
        </svg>
      </Button>

      <Link className={classes.logo} to="/">
        {/* oxlint-disable-next-line react/jsx-no-literals -- Brand name is not translated. */}
        <span>TECH PULSE</span>
      </Link>

      <nav className={classes.navigation}>
        <Button theme="accent" asChild>
          <Link to="/">{t('navbar.home')}</Link>
        </Button>
        <Button theme="accent" asChild>
          <Link to="/about">{t('navbar.about')}</Link>
        </Button>
      </nav>

      <div className={classes.navbar__links}>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
