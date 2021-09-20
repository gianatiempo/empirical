import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { server, rest } from '../../mocks/server';
import Chart from './Chart';

test('renders Chart page properly', async () => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  render(
    <QueryClientProvider client={queryClient}>
      <Chart />
    </QueryClientProvider>
  );
  await waitForElementToBeRemoved(() => expect(screen.getByTestId('spinner')));
  //title
  expect(screen.getByText('Market Cap for TOP 10 Biggest Coins')).toBeVisible();

  //TODO: research how to test a canvas/chart.
});

test('renders Chart page error', async () => {
  server.use(
    rest.get('/api/cryptocurrency', (req, res, ctx) => {
      return res(ctx.json({ error_code: 400, error_message: 'Some error message' }));
    })
  );
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  render(
    <QueryClientProvider client={queryClient}>
      <Chart />
    </QueryClientProvider>
  );

  await waitForElementToBeRemoved(() => expect(screen.getByTestId('spinner')));
  expect(screen.getByText('Some error message')).toBeVisible();
});
