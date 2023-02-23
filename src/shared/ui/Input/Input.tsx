import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import cns from 'shared/lib/classnames/cns';
import css from './Input.module.scss';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  onChange?: (value: string) => void;
};

export const Input = memo(({ className, onChange, type = 'text', ...rest }: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      data-testid="test-input"
      className={cns(css.input, {}, [className])}
      type={type}
      onChange={handleChange}
      {...rest}
    />
  );
});
