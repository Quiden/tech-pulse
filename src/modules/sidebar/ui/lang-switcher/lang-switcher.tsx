import type { FC } from 'react';

import { LANGUAGES } from '@common/config/i18n/languages';
import { useTranslation } from 'react-i18next';

export interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === LANGUAGES.EN ? LANGUAGES.RU : LANGUAGES.EN);
  };

  return (
    <button className={className} onClick={switchLanguage}>
      {t('language')}
    </button>
  );
};
