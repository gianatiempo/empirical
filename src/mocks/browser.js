import { setupWorker } from 'msw';
import { randomUserHandlers } from './handlers/randomuser';

export const worker = setupWorker(...randomUserHandlers);
