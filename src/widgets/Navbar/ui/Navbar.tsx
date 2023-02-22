import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { Portal } from 'shared/ui/Portal/Portal';
import css from './Navbar.module.scss';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const openModal = useCallback(() => {
    setOpen((item) => !item);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className={css.root}>
      <div />
      <div>
        <Button onClick={openModal}>{t('open')}</Button>
        <Portal>
          <Modal isOpen={open} onClose={closeModal} />
        </Portal>
      </div>
    </div>
  );
}
