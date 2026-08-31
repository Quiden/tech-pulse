import type { ErrorComponentProps } from '@tanstack/react-router';
import type { FC } from 'react';

import { classNames } from '@common/helpers/class-names';
import { useTranslation } from 'react-i18next';

import classes from './page-error.module.css';

export interface PageErrorProps extends Partial<ErrorComponentProps> {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className, reset }) => {
  const { t } = useTranslation();

  const handleReset = () => {
    if (reset) {
      reset();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className={classNames(classes['page-error'], className)}>
      <h2>{t('error')}</h2>
      <button onClick={handleReset}>{t('reload-page')}</button>
    </div>
  );
};
