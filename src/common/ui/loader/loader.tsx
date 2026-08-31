import type { FC } from 'react';

import { classNames } from '@common/helpers/class-names';

import classes from './loader.module.css';

export interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return <div className={classNames(classes['loader'], className)} />;
};
