import { useTranslation } from 'react-i18next';
import cns from 'shared/lib/classnames/cns';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import css from './LogtinFrom.module.scss';

interface LoginFormProps {
  className?: string;
}

export function LoginForm(props: LoginFormProps) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <form className={cns(css.root, {}, [className])}>
      <h3 className={css.title}>{t('login')}</h3>
      <Input data-testid="test-login" />
      <Input data-testid="test-password" type="password" />
      <Button type="submit" className={css.button}>
        {t('submit')}
      </Button>
    </form>
  );
}
