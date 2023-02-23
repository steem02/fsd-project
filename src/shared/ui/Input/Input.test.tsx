import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from './Input';

describe('Input test', () => {
  test('render input with placeholder', () => {
    render(<Input placeholder="Login" />);
    expect(screen.getByPlaceholderText('Login')).toBeInTheDocument();
  });

  test('type input value', () => {
    render(<Input />);
    const input = screen.getByTestId('test-input');
    userEvent.type(input, 'test input');
    expect(input).toHaveValue('test input');
  });
});
