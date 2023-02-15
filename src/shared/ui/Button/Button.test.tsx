import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button test', () => {
  test('render Button', () => {
    render(<Button>ToGGLE</Button>);
    expect(screen.getByText('ToGGLE')).toBeInTheDocument();
  });
});
