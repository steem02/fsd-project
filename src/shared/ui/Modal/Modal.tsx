import { AnimationEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cns from 'shared/lib/classnames/cns';
import css from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose?(): void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    setOpen(false);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  useEffect(() => {
    if (isOpen) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  const onAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === css.closeOverlay) {
      onClose?.();
    }
  };

  const toggleClasses = useMemo(
    () => ({
      [css.opened]: open,
      [css.closed]: !open,
    }),
    [open]
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={cns('root', toggleClasses, [css.overlay])}
      onClick={handleClose}
      onAnimationEnd={onAnimationEnd}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      }}
    >
      <div className={cns(css.content, toggleClasses, [])} onClick={(e) => e.stopPropagation()}>
        {t('mock_article')}
      </div>
    </div>
  );
}
