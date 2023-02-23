import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div>
      <span>{t('mock_article')}</span>
      <Counter />
    </div>
  );
}
