import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { LoginForm } from './LoginForm';

describe('Login form', () => {
  test('render login form', () => {
    componentRender(<LoginForm />);
    expect(screen.getByTestId('test-login')).toBeInTheDocument();
    expect(screen.getByTestId('test-password')).toBeInTheDocument();
  });
});
