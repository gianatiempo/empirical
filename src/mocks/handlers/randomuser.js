import { rest } from 'msw';

export const randomUserHandlers = [
  rest.get('https://randomuser.me/api/', (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            gender: 'male',
            name: { title: 'Mr', first: 'Jan-Willem', last: 'Creusen' },
            location: {
              street: { number: 9659, name: 'De Wiel' },
              city: 'Driehuizen',
              state: 'Noord-Holland',
              country: 'Netherlands',
              postcode: 77954,
              coordinates: { latitude: '45.9079', longitude: '-169.4881' },
              timezone: { offset: '+5:30', description: 'Bombay, Calcutta, Madras, New Delhi' }
            },
            email: 'jan-willem.creusen@example.com',
            login: {
              uuid: '62bf639c-a49f-4b31-af21-0fa1d55c2704',
              username: 'blackbutterfly133',
              password: 'volleyba',
              salt: 'OsI9Rle5',
              md5: '9c088a785a41e183c3a81e21ce3e70e1',
              sha1: '17b7be432899e572f2115e1bbfbbb4502fa2b736',
              sha256: 'f53aba51d150256eb3fa992bb7a5e5e195f8001e1dd79d224d4df63775dbefa6'
            },
            dob: { date: '1997-06-12T14:21:38.680Z', age: 24 },
            registered: { date: '2013-07-08T15:43:45.420Z', age: 8 },
            phone: '(833)-714-0297',
            cell: '(152)-536-6433',
            id: { name: 'BSN', value: '82724985' },
            picture: {
              large: 'https://randomuser.me/api/portraits/men/7.jpg',
              medium: 'https://randomuser.me/api/portraits/med/men/7.jpg',
              thumbnail: 'https://randomuser.me/api/portraits/thumb/men/7.jpg'
            },
            nat: 'NL'
          }
        ],
        info: { seed: '67329b2a3d2b21e5', results: 1, page: 1, version: '1.3' }
      })
    );
  })
];
