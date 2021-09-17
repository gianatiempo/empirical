import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

test('renders layout properly', async () => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  render();
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MemoryRouter>
  );

  const menuOptionCrypto = screen.getByText('Cryptocurrencies');
  const menuOptionConverter = screen.getByText('Converter');
  const menuOptionChart = screen.getByText('Charts');
  const menuOptionOptional = screen.getByText('Optional');

  //logo
  expect(screen.getByAltText('empirical logo')).toBeVisible();
  //menu
  expect(menuOptionCrypto).toBeVisible();
  expect(menuOptionConverter).toBeVisible();
  expect(menuOptionChart).toBeVisible();
  expect(menuOptionOptional).toBeVisible();

  //header
  userEvent.click(menuOptionConverter);
  expect(screen.getByText('Convert')).toBeVisible();
  expect(screen.getByText('Convert your coins and get rich')).toBeVisible();

  userEvent.click(menuOptionChart);
  expect(screen.getByText('Chart')).toBeVisible();
  expect(screen.getByText('View nice graphs and decide what to buy')).toBeVisible();

  userEvent.click(menuOptionOptional);
  expect(screen.getByText('🤯')).toBeVisible();
  expect(screen.getByText('Something nice to play with?')).toBeVisible();

  userEvent.click(menuOptionCrypto);
  expect(screen.getByText('Cryptocurrency')).toBeVisible();
  expect(screen.getByText('Check the Crypto world here')).toBeVisible();
});
