import { useTranslation } from 'react-i18next';

interface UserProps {
  className?: string;
}

export function User(props: UserProps) {
  const { className } = props;
  const { t } = useTranslation();
  return <div>{t('mock_article')}</div>;
}
