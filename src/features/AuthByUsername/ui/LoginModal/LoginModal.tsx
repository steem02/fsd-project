import { useTranslation } from 'react-i18next';
import { Modal, ModalProps } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

type LoginModalProps = Omit<ModalProps, 'children'> & {
  className?: string;
};

export function LoginModal({ className, ...modalProps }: LoginModalProps) {
  return (
    <Modal {...modalProps}>
      <LoginForm />
    </Modal>
  );
}
