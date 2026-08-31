import { Counter } from '@common/ui/counter/counter';
import { useTranslation } from 'react-i18next';

export const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      <h1>{t('title')}</h1>
      <Counter />
    </div>
  );
};
