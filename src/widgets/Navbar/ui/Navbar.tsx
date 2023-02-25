import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { Portal } from 'shared/ui/Portal/Portal';
import css from './Navbar.module.scss';

export function Navbar() {
  const authData = useSelector(getUserAuthData);
  const [isAuthModal, setisAuthModal] = useState(Boolean(authData));
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const isAuthModalModal = useCallback(() => {
    setisAuthModal((item) => !item);
  }, []);

  const closeModal = useCallback(() => {
    setisAuthModal(false);
  }, []);

  const logout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={css.root}>
        <div />
        <div>
          <Button onClick={logout}>{t('logout')}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={css.root}>
      <div />
      <div>
        <Button onClick={isAuthModalModal}>{t('login')}</Button>
        <Portal>
          <LoginModal isOpen={isAuthModal} onClose={closeModal} />
        </Portal>
      </div>
    </div>
  );
}
