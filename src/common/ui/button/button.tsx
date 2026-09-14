import type { ComponentProps, FC } from 'react';

import { classNames } from '@common/helpers/class-names';
import { Slot } from 'radix-ui';

import classes from './button.module.css';

type ButtonTheme = 'accent' | 'outline';
type ButtonSize = 's' | 'm' | 'l';

export interface ButtonProps extends ComponentProps<'button'> {
  theme?: ButtonTheme;
  size?: ButtonSize;
  asChild?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme = 'accent',
  size = 'm',
  asChild = false,
  type = 'button',
  children,
  ...props
}) => {
  const Component = asChild ? Slot.Root : 'button';

  return (
    <Component
      className={classNames(classes.button, classes[theme], classes[size], className)}
      type={asChild ? undefined : type}
      {...props}
    >
      {children}
    </Component>
  );
};
