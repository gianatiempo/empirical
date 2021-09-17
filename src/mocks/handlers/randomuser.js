import { rest } from 'msw';

export const randomUserHandlers = [
  rest.get('https://randomuser.me/api/', (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            name: { title: 'Ms', first: 'Gabrielle', last: 'Ambrose' },
            picture: {
              large: 'https://randomuser.me/api/portraits/women/50.jpg',
              medium: 'https://randomuser.me/api/portraits/med/women/50.jpg',
              thumbnail: 'https://randomuser.me/api/portraits/thumb/women/50.jpg'
            }
          }
        ],
        info: { seed: 'b085dfd30261ce35', results: 1, page: 1, version: '1.3' }
      })
    );
  })
];
