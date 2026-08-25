import type { FC } from 'react';

import { classNames } from '@common/helpers/class-names';
import { Link, LinkProps } from '@tanstack/react-router';

import classes from './button-link.module.css';

type ButtonLinkTheme = 'primary' | 'secondary';

export interface ButtonLinkProps extends LinkProps {
  className?: string;
  theme?: ButtonLinkTheme;
}

export const ButtonLink: FC<ButtonLinkProps> = ({ className, theme = 'primary', children, ...props }) => {
  return (
    <Link className={classNames(classes.link, classes[theme], className)} {...props}>
      {children}
    </Link>
  );
};
