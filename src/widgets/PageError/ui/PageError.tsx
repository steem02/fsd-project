import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import css from './PageError.module.scss';

export function PageError() {
  const { t } = useTranslation();
  return (
    <div className={css.root}>
      {t('page_error')}
      <Button
        onClick={() => {
          location.reload();
        }}
      >
        {t('reload_page')}
      </Button>
    </div>
  );
}
