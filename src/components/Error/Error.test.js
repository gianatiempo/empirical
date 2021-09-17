import { render, screen } from '@testing-library/react';
import Error from './Error';

test('renders spinner properly', () => {
  render(<Error message='testing error message' />);

  expect(screen.getByText('Oops! This should not happen!')).toBeVisible();
  expect(screen.getByText('testing error message')).toBeVisible();
});
