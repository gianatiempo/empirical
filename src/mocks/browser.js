import { setupWorker } from 'msw';
import { randomUserHandlers } from './handlers/randomuser';
import { cryptocurrencyHandlers } from './handlers/coinmarketcap';

export const worker = setupWorker(...randomUserHandlers, ...cryptocurrencyHandlers);
