import { useThunkDispatch } from 'app/providers/StoreProvider/config/store';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUserName } from 'features/AuthByUsername/services/loginByUserName/loginByUserName.ts';
import { FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import cns from 'shared/lib/classnames/cns';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import css from './LogtinFrom.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const thunkDispatch = useThunkDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);
  const onChangeUsername = useCallback((value) => dispatch(loginActions.setUsername(value)), [dispatch]);
  const onChangePassword = useCallback((value) => dispatch(loginActions.setPassword(value)), [dispatch]);
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      thunkDispatch(loginByUserName({ username, password }));
    },
    [thunkDispatch, username, password]
  );

  return (
    <form className={cns(css.root, {}, [className])} onSubmit={onSubmit}>
      <Text title={t('login')} />
      {Boolean(error) && <Text title={error} variant={TextVariant.ERROR} />}
      <Input data-testid="test-login" value={username} onChange={onChangeUsername} />
      <Input data-testid="test-password" type="password" value={password} onChange={onChangePassword} />
      <Button type="submit" variant={ButtonVariant.OUTLINED} className={css.button} disabled={isLoading}>
        {t('submit')}
      </Button>
    </form>
  );
});
