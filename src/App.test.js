import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders layout properly', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByAltText('empirical logo')).toBeVisible();
  expect(screen.getByText('Cryptocurrencies')).toBeVisible();
  expect(screen.getByText('Converter')).toBeVisible();
  expect(screen.getByText('Charts')).toBeVisible();
  expect(screen.getByText('Optional')).toBeVisible();
});
