import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink';
import css from './Navbar.module.scss';

export function Navbar() {
  const { t } = useTranslation();

  return (
    <div className={css.root}>
      <div />
      <div>
        <AppLink to="/main" className={css.link}>
          {t('main')}
        </AppLink>
        <AppLink to="/about" className={css.link}>
          {t('about')}
        </AppLink>
      </div>
    </div>
  );
}
