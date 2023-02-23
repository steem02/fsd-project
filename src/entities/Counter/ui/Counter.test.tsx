import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
  test('render Counter', () => {
    componentRender(<Counter />, {
      initialStore: { counter: { value: 10 } },
    });
    const counter = screen.getByTestId('value-title');
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('10');
  });
  test('increment counter', () => {
    componentRender(<Counter />, {
      initialStore: { counter: { value: 10 } },
    });
    const counter = screen.getByTestId('value-title');
    const btn = screen.getByTestId('increment-btn');
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(counter).toHaveTextContent('11');
  });
  test('decrement counter', () => {
    componentRender(<Counter />, {
      initialStore: { counter: { value: 10 } },
    });
    const counter = screen.getByTestId('value-title');
    const btn = screen.getByTestId('decrement-btn');
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(counter).toHaveTextContent('9');
  });
});
