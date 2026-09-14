import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { Button } from './button';

describe('Button', () => {
  test('with text', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('test theme outline', () => {
    const { getByText } = render(<Button theme="outline">TEST</Button>);
    expect(getByText('TEST')).toHaveClass('outline');
  });
});
