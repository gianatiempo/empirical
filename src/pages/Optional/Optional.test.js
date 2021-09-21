import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { server, rest } from '../../mocks/server';
import { setupServer } from '../../setupTests';
import Optional from './Optional';

const renderComponentToTest = () => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  render(
    <QueryClientProvider client={queryClient}>
      <Optional />
    </QueryClientProvider>
  );
};

describe('Optional Component', () => {
  setupServer();

  test('renders Optional page properly', async () => {
    renderComponentToTest();

    await waitForElementToBeRemoved(() => expect(screen.getByTestId('spinner')));
    expect(screen.getByText('Minute Consumption')).toBeVisible();
    expect(screen.getByText('50.00%')).toBeVisible();

    expect(screen.getByText('Daily Consumption')).toBeVisible();
    expect(screen.getByText('58.65%')).toBeVisible();

    expect(screen.getByText('Monthly Consumption')).toBeVisible();
    expect(screen.getByText('63.19%')).toBeVisible();

    expect(screen.getByText('Documentation')).toBeVisible();
  });

  test('renders Optional page error', async () => {
    server.use(
      rest.get('/api/optional', (req, res, ctx) => {
        return res(ctx.json({ error_code: 400, error_message: 'Some error message' }));
      })
    );
    renderComponentToTest();

    await waitForElementToBeRemoved(() => expect(screen.getByTestId('spinner')));
    expect(screen.getByText('Some error message')).toBeVisible();
  });
});
