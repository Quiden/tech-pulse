import type { FC } from 'react';

import { classNames } from '@common/helpers/class-names';
import { NotFoundRouteProps } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import classes from './not-found-page.module.css';

export const NotFoundPage: FC<NotFoundRouteProps> = () => {
  const { t } = useTranslation();

  return <div className={classNames(classes['not-found-page'])}>{t('not-found')}</div>;
};
