import { setupServer } from 'msw/node';
import { randomUserHandlers } from './handlers/randomuser';

const server = setupServer(...randomUserHandlers);

export * from 'msw';
export { server };
