import type { FC } from 'react';

import { Loader } from '@common/ui/loader/loader';

import classes from './page-loader.module.css';

export const PageLoader: FC = () => {
  return (
    <div className={classes['page-loader']}>
      <Loader />
    </div>
  );
};
