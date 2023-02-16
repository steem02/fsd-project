import { HTMLAttributes, PropsWithChildren } from 'react';
import cns from 'shared/lib/classnames/cns';
import css from './Button.module.scss';

export enum ButtonVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
}

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  className?: string;
  theme?: ButtonVariant;
};

export function Button(props: PropsWithChildren<ButtonProps>) {
  const { className, children, theme = ButtonVariant.CONTAINED, ...rest } = props;
  return (
    <button data-testid="test-button" type="button" className={cns(css.root, { className }, [css.outlined])} {...rest}>
      {children}
    </button>
  );
}
