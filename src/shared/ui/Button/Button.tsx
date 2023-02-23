import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import cns from 'shared/lib/classnames/cns';
import { Size } from 'shared/types/types';
import css from './Button.module.scss';

export enum ButtonVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  CLEARED = 'cleared',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Size;
  square?: boolean;
  className?: string;
  variant?: ButtonVariant;
};

export function Button(props: PropsWithChildren<ButtonProps>) {
  const {
    className,
    size = Size.M,
    square,
    children,
    variant = ButtonVariant.CONTAINED,
    type = 'button',
    ...rest
  } = props;

  const classNames = [className, css[size], css[variant]];
  return (
    <button
      data-testid="test-button"
      type={type}
      className={cns(css.root, { [css.square]: square }, classNames)}
      {...rest}
    >
      {children}
    </button>
  );
}
