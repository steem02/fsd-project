import cns from 'shared/lib/classnames/cns';
import css from './Text.module.scss';

export enum TextVariant {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
}

export const Text = (props: TextProps) => {
  const { className, text, title, variant = TextVariant.PRIMARY } = props;

  return (
    <div className={cns(css.Text, { [css[variant]]: true }, [className])}>
      {title && <p className={css.title}>{title}</p>}
      {text && <p className={css.text}>{text}</p>}
    </div>
  );
};
