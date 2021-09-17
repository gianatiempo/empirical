import { setupServer } from 'msw/node';
import { randomUserHandlers } from './handlers/randomuser';
import { cryptocurrencyHandlers } from './handlers/coinmarketcap';

const server = setupServer(...randomUserHandlers, ...cryptocurrencyHandlers);

export * from 'msw';
export { server };
