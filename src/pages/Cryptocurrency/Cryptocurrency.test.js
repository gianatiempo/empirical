import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import userEvent from '@testing-library/user-event';
import { server, rest } from '../../mocks/server';
import { setupServer } from '../../setupTests';
import Cryptocurrency from './Cryptocurrency';

const renderComponentToTest = () => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  render(
    <QueryClientProvider client={queryClient}>
      <Cryptocurrency />
    </QueryClientProvider>
  );
};

describe('Cryptocurrency Component', () => {
  setupServer();

  test('renders Cryptocurrency page properly', async () => {
    renderComponentToTest();
    await waitForElementToBeRemoved(() => expect(screen.getByTestId('spinner')));
    expect(screen.getByText('1-10 of 5000')).toBeVisible();
    expect(screen.getByText('Coin 1')).toBeVisible();
    expect(screen.getByText('Coin 10')).toBeVisible();
    userEvent.click(screen.getByText('1-10 of 5000').nextElementSibling.nextElementSibling.nextElementSibling);

    await waitFor(() => expect(screen.getByText('11-20 of 5000')).toBeVisible());
    expect(screen.getByText('Coin 11')).toBeVisible();
    expect(screen.getByText('Coin 20')).toBeVisible();
  });

  test('renders Cryptocurrency page  error', async () => {
    server.use(
      rest.get('/api/cryptocurrency', (req, res, ctx) => {
        return res(ctx.json({ error_code: 400, error_message: 'Some error message' }));
      })
    );
    renderComponentToTest();

    await waitForElementToBeRemoved(() => expect(screen.getByTestId('spinner')));
    expect(screen.getByText('Some error message')).toBeVisible();
  });
});
