import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button test', () => {
  test('render Button', () => {
    render(<Button>ToGLE</Button>);
    expect(screen.getByText(/togle/i)).toBeInTheDocument();
  });

  test('Button click', () => {
    render(<Button>ToGGLE</Button>);
    const button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
  });
});
