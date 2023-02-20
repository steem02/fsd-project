import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();
  return <span>{t('mock_article')}</span>;
}
