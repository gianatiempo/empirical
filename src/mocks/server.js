import { setupServer } from 'msw/node';
import { randomUserHandlers } from './handlers/randomuser';

export const server = setupServer(...randomUserHandlers);
