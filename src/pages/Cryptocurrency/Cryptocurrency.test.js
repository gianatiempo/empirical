import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import userEvent from '@testing-library/user-event';
import { server, rest } from '../../mocks/server';
import Cryptocurrency from './Cryptocurrency';

test('renders user properly', async () => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  render(
    <QueryClientProvider client={queryClient}>
      <Cryptocurrency />
    </QueryClientProvider>
  );
  await waitForElementToBeRemoved(() => expect(screen.getByTestId('spinner')));
  expect(screen.getByText('1-10 of 5000')).toBeVisible();
  expect(screen.getByText('Coin 1')).toBeVisible();
  expect(screen.getByText('Coin 10')).toBeVisible();
  userEvent.click(screen.getByText('1-10 of 5000').nextElementSibling.nextElementSibling.nextElementSibling);

  await waitFor(() => expect(screen.getByText('11-20 of 5000')).toBeVisible());
  expect(screen.getByText('Coin 11')).toBeVisible();
  expect(screen.getByText('Coin 20')).toBeVisible();
});

// test('renders red user when error', async () => {
//   server.use(
//     rest.get('/api/cryptocurrency', (req, res, ctx) => {
//       return res(ctx.json({ error_code: 400, error_message: 'Some error message' }));
//     })
//   );
//   const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
//   render(
//     <QueryClientProvider client={queryClient}>
//       <Cryptocurrency />
//     </QueryClientProvider>
//   );

//   await waitForElementToBeRemoved(() => expect(screen.getByTestId('spinner')));
//   expect(screen.getByText('Some error message')).toBeVisible();
// });
