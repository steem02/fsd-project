import { AnimationEvent, useCallback, useEffect, useMemo, useState } from 'react';
import cns from 'shared/lib/classnames/cns';
import css from './Modal.module.scss';

export interface ModalProps {
  isOpen: boolean;
  onClose?(): void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

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
    <div className={cns('root', toggleClasses, [css.overlay])} onClick={handleClose} onAnimationEnd={onAnimationEnd}>
      <div className={cns(css.content, toggleClasses, [])} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
