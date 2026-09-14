import type { FC } from 'react';

import SvgTheme from '@common/assets/icons/theme-stroke-rounded.svg';
import { classNames } from '@common/helpers/class-names';
import { useTheme } from '@modules/theme';

import classes from './theme-switcher.module.css';

export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const [, switchTheme] = useTheme();

  return (
    <button className={classNames(classes['theme-switcher'], className)} type="button" onClick={switchTheme}>
      <SvgTheme color="var(--color-primary)" />
    </button>
  );
};
