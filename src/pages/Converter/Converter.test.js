import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';
import { server, rest } from '../../mocks/server';
import { setupServer } from '../../setupTests';
import Converter from './Converter';

const renderComponentToTest = () => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  render(
    <QueryClientProvider client={queryClient}>
      <Converter />
    </QueryClientProvider>
  );
};

describe('Converter Component', () => {
  setupServer();

  test('render Converter page properly', async () => {
    renderComponentToTest();

    await waitForElementToBeRemoved(() => expect(screen.getByTestId('spinner')));
    expect(screen.getByText('0')).toBeVisible();

    userEvent.type(screen.getByPlaceholderText('Amount'), '4');

    const origin = screen.getByTestId('origin').firstElementChild;
    fireEvent.mouseDown(origin);

    const originCoin = screen.getByText('Cardano - ADA');
    expect(originCoin).toBeInTheDocument();
    fireEvent.click(originCoin);

    const destination = screen.getByTestId('destination').firstElementChild;
    fireEvent.mouseDown(destination);

    const destinationCoin = screen.queryAllByText('Bitcoin - BTC')[1];
    expect(destinationCoin).toBeInTheDocument();
    fireEvent.click(destinationCoin);

    userEvent.click(screen.getByText('Convert'));

    await waitFor(() => expect(screen.getByText('28.06278909 BTC')).toBeVisible());
  });

  test('renders Converter page error', async () => {
    server.use(
      rest.get('/api/coin', (req, res, ctx) => {
        return res(ctx.json({ error_code: 400, error_message: 'Some error message' }));
      })
    );
    renderComponentToTest();

    await waitForElementToBeRemoved(() => expect(screen.getByTestId('spinner')));
    expect(screen.getByText('Some error message')).toBeVisible();
  });
});
