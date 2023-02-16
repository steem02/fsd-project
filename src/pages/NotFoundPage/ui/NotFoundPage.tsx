import { useTranslation } from 'react-i18next';
import cns from 'shared/lib/classnames/cns';
import css from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export function NotFoundPage(props: NotFoundPageProps) {
  const { className } = props;
  const { t } = useTranslation();
  return <div className={cns(css.root, { className })}>{t('not_found')}</div>;
}
