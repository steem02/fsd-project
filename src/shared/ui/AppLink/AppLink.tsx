import { NavLinkProps, NavLink } from 'react-router-dom';
import cns from 'shared/lib/classnames/cns';
import { Size } from 'shared/types/types';
import css from './AppLink.module.scss';

export enum AppLinkVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type AppLinkProps = NavLinkProps & {
  className?: string;
  variant?: AppLinkVariant;
  size?: Size;
  underline?: boolean;
};

export function AppLink(props: AppLinkProps) {
  const { underline, size = Size.M, variant = AppLinkVariant.PRIMARY, className, ...rest } = props;
  const classNames = [css[size], css[variant], className];
  return (
    <NavLink
      className={({ isActive }) => cns(css.root, { [css.active]: isActive, [css.underline]: underline }, classNames)}
      {...rest}
    />
  );
}
