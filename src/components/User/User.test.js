import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import User from './User';

test('renders user properly', async () => {
  render(<User />);

  await waitForElementToBeRemoved(() => expect(screen.getByTestId('spinner')));
  expect(screen.getByTestId('user-avatar')).toBeVisible();
  expect(screen.getByText('Mr Jan-Willem Creusen')).toBeVisible();
});
