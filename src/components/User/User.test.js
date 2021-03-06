import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { server, rest } from '../../mocks/server';
import { setupServer } from '../../setupTests';
import User from './User';

const renderComponentToTest = () => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  render(
    <QueryClientProvider client={queryClient}>
      <User />
    </QueryClientProvider>
  );
};

describe('User Component', () => {
  setupServer();

  test('renders user properly', async () => {
    renderComponentToTest();
    await waitForElementToBeRemoved(() => expect(screen.getByTestId('spinner')));
    expect(screen.getByTestId('user-avatar')).toBeVisible();
    expect(screen.getByText('Ms Gabrielle Ambrose')).toBeVisible();
  });

  test('renders red user when error', async () => {
    server.use(
      rest.get('https://randomuser.me/api/', (req, res, ctx) => {
        return res(
          ctx.json({
            error: 'Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you.'
          })
        );
      })
    );
    renderComponentToTest();

    await waitForElementToBeRemoved(() => expect(screen.getByTestId('spinner')));
    expect(screen.getByTestId('user-avatar-error')).toBeVisible();
  });
});
