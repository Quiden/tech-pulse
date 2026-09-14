import { renderWithTranslation } from '@common/helpers/render-with-translation';
import { Sidebar } from '@modules/sidebar';
import { fireEvent, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

describe('Sidebar', () => {
  test('test render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
