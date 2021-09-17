import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

test('renders spinner properly', () => {
  render(<Spinner />);

  expect(screen.getByTestId('spinner')).toBeVisible();
});
