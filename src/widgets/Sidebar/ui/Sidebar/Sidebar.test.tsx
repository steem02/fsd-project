import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar';

describe('Button test', () => {
  test('render Sidebar', () => {
    componentRender(<Sidebar />, { route: '/' });
    expect(screen.getByTestId('test-sidebar')).toBeInTheDocument();
  });

  test('test toggle Sidbar', () => {
    componentRender(<Sidebar />, { route: '/' });
    const sidebar = screen.getByTestId('test-sidebar');
    const button = screen.getByTestId('toggle-button');
    expect(button).toBeInTheDocument();
    expect(sidebar).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByTestId('test-sidebar')).toHaveClass('collapsed');
    fireEvent.click(button);
    expect(screen.getByTestId('test-sidebar')).not.toHaveClass('collapsed');
  });
});
