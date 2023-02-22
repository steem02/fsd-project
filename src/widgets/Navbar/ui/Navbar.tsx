import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { Portal } from 'shared/ui/Portal/Portal';
import css from './Navbar.module.scss';

export function Navbar() {
  const [isAuthModal, setisAuthModal] = useState(false);
  const { t } = useTranslation();

  const isAuthModalModal = useCallback(() => {
    setisAuthModal((item) => !item);
  }, []);

  const closeModal = useCallback(() => {
    setisAuthModal(false);
  }, []);

  return (
    <div className={css.root}>
      <div />
      <div>
        <Button onClick={isAuthModalModal}>{t('login')}</Button>
        <Portal>
          <Modal isOpen={isAuthModal} onClose={closeModal} />
        </Portal>
      </div>
    </div>
  );
}
