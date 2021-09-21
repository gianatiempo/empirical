import { rest } from 'msw';

const crypto = (start, limit, sort, order, filter, value) => {
  const list = [
    {
      id: 1,
      name: 'Coin ' + (1 + (start - 1) * limit),
      symbol: 'BTC',
      slug: 'bitcoin',
      num_market_pairs: 8757,
      date_added: '2013-04-28T00:00:00.000Z',
      tags: [
        'mineable',
        'pow',
        'sha-256',
        'store-of-value',
        'state-channels',
        'coinbase-ventures-portfolio',
        'three-arrows-capital-portfolio',
        'polychain-capital-portfolio',
        'binance-labs-portfolio',
        'arrington-xrp-capital',
        'blockchain-capital-portfolio',
        'boostvc-portfolio',
        'cms-holdings-portfolio',
        'dcg-portfolio',
        'dragonfly-capital-portfolio',
        'electric-capital-portfolio',
        'fabric-ventures-portfolio',
        'framework-ventures',
        'galaxy-digital-portfolio',
        'huobi-capital',
        'alameda-research-portfolio',
        'a16z-portfolio',
        '1confirmation-portfolio',
        'winklevoss-capital',
        'usv-portfolio',
        'placeholder-ventures-portfolio',
        'pantera-capital-portfolio',
        'multicoin-capital-portfolio',
        'paradigm-xzy-screener'
      ],
      max_supply: 21000000,
      circulating_supply: 18818562,
      total_supply: 18818562,
      platform: null,
      cmc_rank: 1 + (start - 1) * limit,
      last_updated: '2021-09-17T19:08:02.000Z',
      quote: {
        USD: {
          price: 47137.8137901931,
          volume_24h: 28721204321.594463,
          percent_change_1h: -0.13108441,
          percent_change_24h: -1.09372168,
          percent_change_7d: 3.15192585,
          percent_change_30d: 3.65381132,
          percent_change_60d: 53.91492644,
          percent_change_90d: 32.50387169,
          market_cap: 887065871355.2037,
          market_cap_dominance: 42.0278,
          fully_diluted_market_cap: 989894089594.06,
          last_updated: '2021-09-17T19:08:02.000Z'
        }
      }
    },
    {
      id: 1027,
      name: 'Coin ' + (2 + (start - 1) * limit),
      symbol: 'ETH',
      slug: 'ethereum',
      num_market_pairs: 5078,
      date_added: '2015-08-07T00:00:00.000Z',
      tags: [
        'mineable',
        'pow',
        'smart-contracts',
        'ethereum',
        'binance-smart-chain',
        'coinbase-ventures-portfolio',
        'three-arrows-capital-portfolio',
        'polychain-capital-portfolio',
        'binance-labs-portfolio',
        'arrington-xrp-capital',
        'blockchain-capital-portfolio',
        'boostvc-portfolio',
        'cms-holdings-portfolio',
        'dcg-portfolio',
        'dragonfly-capital-portfolio',
        'electric-capital-portfolio',
        'fabric-ventures-portfolio',
        'framework-ventures',
        'hashkey-capital-portfolio',
        'kinetic-capital',
        'huobi-capital',
        'alameda-research-portfolio',
        'a16z-portfolio',
        '1confirmation-portfolio',
        'winklevoss-capital',
        'usv-portfolio',
        'placeholder-ventures-portfolio',
        'pantera-capital-portfolio',
        'multicoin-capital-portfolio',
        'paradigm-xzy-screener'
      ],
      max_supply: null,
      circulating_supply: 117563903.1865,
      total_supply: 117563903.1865,
      platform: null,
      cmc_rank: 2 + (start - 1) * limit,
      last_updated: '2021-09-17T19:08:02.000Z',
      quote: {
        USD: {
          price: 3389.102157919058,
          volume_24h: 18155418799.75658,
          percent_change_1h: -0.18440098,
          percent_change_24h: -5.25988165,
          percent_change_7d: 1.85474679,
          percent_change_30d: 10.58948692,
          percent_change_60d: 86.64660779,
          percent_change_90d: 53.54959458,
          market_cap: 398436077982.75433,
          market_cap_dominance: 18.8773,
          fully_diluted_market_cap: 398436077982.75,
          last_updated: '2021-09-17T19:08:02.000Z'
        }
      }
    },
    {
      id: 2010,
      name: 'Coin ' + (3 + (start - 1) * limit),
      symbol: 'ADA',
      slug: 'cardano',
      num_market_pairs: 303,
      date_added: '2017-10-01T00:00:00.000Z',
      tags: ['mineable', 'dpos', 'pos', 'platform', 'research', 'smart-contracts', 'staking', 'binance-smart-chain'],
      max_supply: 45000000000,
      circulating_supply: 32038100543.532,
      total_supply: 33117618880.453,
      platform: null,
      cmc_rank: 3 + (start - 1) * limit,
      last_updated: '2021-09-17T19:07:09.000Z',
      quote: {
        USD: {
          price: 2.34621023805337,
          volume_24h: 2476451992.4311385,
          percent_change_1h: -0.3039188,
          percent_change_24h: -3.15233365,
          percent_change_7d: -2.94642237,
          percent_change_30d: 11.08604054,
          percent_change_60d: 109.14966736,
          percent_change_90d: 66.48798472,
          market_cap: 75168119503.01802,
          market_cap_dominance: 3.5613,
          fully_diluted_market_cap: 105579460712.4,
          last_updated: '2021-09-17T19:07:09.000Z'
        }
      }
    },
    {
      id: 1839,
      name: 'Coin ' + (4 + (start - 1) * limit),
      symbol: 'BNB',
      slug: 'binance-coin',
      num_market_pairs: 525,
      date_added: '2017-07-25T00:00:00.000Z',
      tags: [
        'marketplace',
        'centralized-exchange',
        'payments',
        'binance-smart-chain',
        'alameda-research-portfolio',
        'multicoin-capital-portfolio'
      ],
      max_supply: 168137036,
      circulating_supply: 168137036,
      total_supply: 168137036,
      platform: null,
      cmc_rank: 4 + (start - 1) * limit,
      last_updated: '2021-09-17T19:07:08.000Z',
      quote: {
        USD: {
          price: 409.1000826139832,
          volume_24h: 1521889683.914073,
          percent_change_1h: -0.13612646,
          percent_change_24h: -3.59664585,
          percent_change_7d: 0.37361348,
          percent_change_30d: 1.01163355,
          percent_change_60d: 45.25289901,
          percent_change_90d: 21.21384139,
          market_cap: 68784875318.07027,
          market_cap_dominance: 3.2635,
          fully_diluted_market_cap: 68784875318.07,
          last_updated: '2021-09-17T19:07:08.000Z'
        }
      }
    },
    {
      id: 825,
      name: 'Coin ' + (5 + (start - 1) * limit),
      symbol: 'USDT',
      slug: 'tether',
      num_market_pairs: 18293,
      date_added: '2015-02-25T00:00:00.000Z',
      tags: [
        'payments',
        'stablecoin',
        'stablecoin-asset-backed',
        'binance-smart-chain',
        'avalanche-ecosystem',
        'solana-ecosystem'
      ],
      max_supply: null,
      circulating_supply: 68253976148.25259,
      total_supply: 71335677474.96931,
      platform: {
        id: 1027,
        name: 'Ethereum',
        symbol: 'ETH',
        slug: 'ethereum',
        token_address: '0xdac17f958d2ee523a2206206994597c13d831ec7'
      },
      cmc_rank: 5 + (start - 1) * limit,
      last_updated: '2021-09-17T19:07:08.000Z',
      quote: {
        USD: {
          price: 1.00065115345462,
          volume_24h: 68715640191.01787,
          percent_change_1h: 0.02949076,
          percent_change_24h: 0.01088125,
          percent_change_7d: 0.0386897,
          percent_change_30d: 0.00864836,
          percent_change_60d: 0.06980682,
          percent_change_90d: -0.0789071,
          market_cap: 68298419960.613075,
          market_cap_dominance: 3.2405,
          fully_diluted_market_cap: 71382127947.79,
          last_updated: '2021-09-17T19:07:08.000Z'
        }
      }
    },
    {
      id: 52,
      name: 'Coin ' + (6 + (start - 1) * limit),
      symbol: 'XRP',
      slug: 'xrp',
      num_market_pairs: 648,
      date_added: '2013-08-04T00:00:00.000Z',
      tags: [
        'medium-of-exchange',
        'enterprise-solutions',
        'binance-chain',
        'arrington-xrp-capital',
        'galaxy-digital-portfolio',
        'a16z-portfolio',
        'pantera-capital-portfolio'
      ],
      max_supply: 100000000000,
      circulating_supply: 46622239005,
      total_supply: 99990263493,
      platform: null,
      cmc_rank: 6 + (start - 1) * limit,
      last_updated: '2021-09-17T19:08:03.000Z',
      quote: {
        USD: {
          price: 1.07045876982461,
          volume_24h: 3100570608.7309704,
          percent_change_1h: 0.15935394,
          percent_change_24h: -2.45767852,
          percent_change_7d: -0.61764576,
          percent_change_30d: -8.52021507,
          percent_change_60d: 92.3939799,
          percent_change_90d: 37.02307402,
          market_cap: 49907184611.761246,
          market_cap_dominance: 2.3679,
          fully_diluted_market_cap: 107045876982.46,
          last_updated: '2021-09-17T19:08:03.000Z'
        }
      }
    },
    {
      id: 5426,
      name: 'Coin ' + (7 + (start - 1) * limit),
      symbol: 'SOL',
      slug: 'solana',
      num_market_pairs: 145,
      date_added: '2020-04-10T00:00:00.000Z',
      tags: [
        'dpos',
        'platform',
        'solana-ecosystem',
        'cms-holdings-portfolio',
        'kinetic-capital',
        'alameda-research-portfolio',
        'multicoin-capital-portfolio'
      ],
      max_supply: null,
      circulating_supply: 296831348.65703416,
      total_supply: 504301007.3268605,
      platform: null,
      cmc_rank: 7 + (start - 1) * limit,
      last_updated: '2021-09-17T19:08:04.000Z',
      quote: {
        USD: {
          price: 141.10831734667164,
          volume_24h: 4485662301.118382,
          percent_change_1h: 0.8857156,
          percent_change_24h: -8.33159103,
          percent_change_7d: -21.47739813,
          percent_change_30d: 84.91425948,
          percent_change_60d: 484.30590253,
          percent_change_90d: 299.46147467,
          market_cap: 41885372144.73731,
          market_cap_dominance: 1.9845,
          fully_diluted_market_cap: 71161066580.12,
          last_updated: '2021-09-17T19:08:04.000Z'
        }
      }
    },
    {
      id: 6636,
      name: 'Coin ' + (8 + (start - 1) * limit),
      symbol: 'DOT',
      slug: 'polkadot-new',
      num_market_pairs: 246,
      date_added: '2020-08-19T00:00:00.000Z',
      tags: [
        'substrate',
        'polkadot',
        'binance-chain',
        'binance-smart-chain',
        'polkadot-ecosystem',
        'three-arrows-capital-portfolio',
        'polychain-capital-portfolio',
        'blockchain-capital-portfolio',
        'boostvc-portfolio',
        'cms-holdings-portfolio',
        'coinfund-portfolio',
        'fabric-ventures-portfolio',
        'fenbushi-capital-portfolio',
        'hashkey-capital-portfolio',
        'kinetic-capital',
        '1confirmation-portfolio',
        'placeholder-ventures-portfolio',
        'pantera-capital-portfolio',
        'exnetwork-capital-portfolio'
      ],
      max_supply: null,
      circulating_supply: 987579314.957085,
      total_supply: 1103303471.382273,
      platform: null,
      cmc_rank: 8 + (start - 1) * limit,
      last_updated: '2021-09-17T19:08:06.000Z',
      quote: {
        USD: {
          price: 33.5507026277161,
          volume_24h: 2376327715.049013,
          percent_change_1h: -0.34485492,
          percent_change_24h: -3.43215176,
          percent_change_7d: 13.02724986,
          percent_change_30d: 36.14282281,
          percent_change_60d: 193.66408831,
          percent_change_90d: 62.43574912,
          market_cap: 33133979917.408737,
          market_cap_dominance: 1.5698,
          fully_diluted_market_cap: 37016606676.47,
          last_updated: '2021-09-17T19:08:06.000Z'
        }
      }
    },
    {
      id: 74,
      name: 'Coin ' + (9 + (start - 1) * limit),
      symbol: 'DOGE',
      slug: 'dogecoin',
      num_market_pairs: 393,
      date_added: '2013-12-15T00:00:00.000Z',
      tags: [
        'mineable',
        'pow',
        'scrypt',
        'medium-of-exchange',
        'memes',
        'payments',
        'binance-smart-chain',
        'doggone-doggerel'
      ],
      max_supply: null,
      circulating_supply: 131324264611.03217,
      total_supply: 131324264611.03217,
      platform: null,
      cmc_rank: 9 + (start - 1) * limit,
      last_updated: '2021-09-17T19:08:03.000Z',
      quote: {
        USD: {
          price: 0.24089377322823,
          volume_24h: 2270571327.326013,
          percent_change_1h: 0.12248957,
          percent_change_24h: 0.4152433,
          percent_change_7d: -1.37280264,
          percent_change_30d: -22.26463863,
          percent_change_60d: 39.56247347,
          percent_change_90d: -17.01669052,
          market_cap: 31635197618.57405,
          market_cap_dominance: 1.4988,
          fully_diluted_market_cap: 31635197618.57,
          last_updated: '2021-09-17T19:08:03.000Z'
        }
      }
    },
    {
      id: 3408,
      name: 'Coin ' + (10 + (start - 1) * limit),
      symbol: 'USDC',
      slug: 'usd-coin',
      num_market_pairs: 1624,
      date_added: '2018-10-08T00:00:00.000Z',
      tags: ['medium-of-exchange', 'stablecoin', 'stablecoin-asset-backed', 'binance-smart-chain', 'fantom-ecosystem'],
      max_supply: null,
      circulating_supply: 29309299879.627617,
      total_supply: 29309299879.627617,
      platform: {
        id: 1027,
        name: 'Ethereum',
        symbol: 'ETH',
        slug: 'ethereum',
        token_address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
      },
      cmc_rank: 10 + (start - 1) * limit,
      last_updated: '2021-09-17T19:08:05.000Z',
      quote: {
        USD: {
          price: 1.00049060652299,
          volume_24h: 2837676407.6747065,
          percent_change_1h: 0.02069143,
          percent_change_24h: 0.03299323,
          percent_change_7d: 0.02039879,
          percent_change_30d: 0.03810369,
          percent_change_60d: 0.02315903,
          percent_change_90d: -0.0548756,
          market_cap: 29323679213.33283,
          market_cap_dominance: 1.3893,
          fully_diluted_market_cap: 29323679213.33,
          last_updated: '2021-09-17T19:08:05.000Z'
        }
      }
    }
  ];

  const filteredList = value
    ? list.filter(item => (value === 'pos' ? item.quote.USD[filter] > 0 : item.quote.USD[filter] < 0))
    : list;

  return order
    ? order === 'descend'
      ? filteredList.sort((a, b) => (a[sort] > b[sort] ? -1 : b[sort] > a[sort] ? 1 : 0))
      : filteredList.sort((a, b) => (a[sort] > b[sort] ? 1 : b[sort] > a[sort] ? -1 : 0))
    : filteredList;
};

export const cryptocurrencyHandlers = [
  //cryptocurrency page
  rest.get('/api/cryptocurrency', (req, res, ctx) => {
    const start = req.url.searchParams.get('start');
    const limit = req.url.searchParams.get('limit');
    const sort = req.url.searchParams.get('sort') ?? undefined;
    const order = req.url.searchParams.get('order') ?? undefined;
    const filter = req.url.searchParams.get('filter') ?? undefined;
    const value = req.url.searchParams.get('value') ?? undefined;

    return res(
      ctx.json({
        status: {
          timestamp: '2021-09-17T19:09:03.127Z',
          error_code: 0,
          error_message: null,
          elapsed: 125,
          credit_count: 1,
          notice: null,
          total_count: 6663
        },
        data: [...crypto(start, limit, sort, order, filter, value)]
      })
    );
  }),

  //convert page
  rest.get('/api/coin', (req, res, ctx) => {
    return res(
      ctx.json({
        status: {
          timestamp: '2021-09-18T19:49:22.057Z',
          error_code: 0,
          error_message: null,
          elapsed: 17,
          credit_count: 1,
          notice: null
        },
        data: [
          {
            id: 2010,
            name: 'Cardano',
            symbol: 'ADA',
            slug: 'cardano',
            rank: 3,
            is_active: 1,
            first_historical_data: '2017-10-01T20:34:25.000Z',
            last_historical_data: '2021-09-18T19:39:19.000Z',
            platform: null
          },
          {
            id: 5805,
            name: 'Avalanche',
            symbol: 'AVAX',
            slug: 'avalanche',
            rank: 11,
            is_active: 1,
            first_historical_data: '2020-09-22T06:44:00.000Z',
            last_historical_data: '2021-09-18T19:39:07.000Z',
            platform: null
          },
          {
            id: 1839,
            name: 'Binance Coin',
            symbol: 'BNB',
            slug: 'binance-coin',
            rank: 4,
            is_active: 1,
            first_historical_data: '2017-07-25T04:30:05.000Z',
            last_historical_data: '2021-09-18T19:39:16.000Z',
            platform: null
          },
          {
            id: 1,
            name: 'Bitcoin',
            symbol: 'BTC',
            slug: 'bitcoin',
            rank: 1,
            is_active: 1,
            first_historical_data: '2013-04-28T18:47:21.000Z',
            last_historical_data: '2021-09-18T19:39:02.000Z',
            platform: null
          },
          {
            id: 74,
            name: 'Dogecoin',
            symbol: 'DOGE',
            slug: 'dogecoin',
            rank: 9,
            is_active: 1,
            first_historical_data: '2013-12-15T14:42:34.000Z',
            last_historical_data: '2021-09-18T19:39:03.000Z',
            platform: null
          },
          {
            id: 6636,
            name: 'Polkadot',
            symbol: 'DOT',
            slug: 'polkadot-new',
            rank: 8,
            is_active: 1,
            first_historical_data: '2020-08-20T03:29:22.000Z',
            last_historical_data: '2021-09-18T19:39:06.000Z',
            platform: null
          },
          {
            id: 1027,
            name: 'Ethereum',
            symbol: 'ETH',
            slug: 'ethereum',
            rank: 2,
            is_active: 1,
            first_historical_data: '2015-08-07T14:49:30.000Z',
            last_historical_data: '2021-09-18T19:39:02.000Z',
            platform: null
          },
          {
            id: 3408,
            name: 'USD Coin',
            symbol: 'USDC',
            slug: 'usd-coin',
            rank: 10,
            is_active: 1,
            first_historical_data: '2018-10-08T18:49:28.000Z',
            last_historical_data: '2021-09-18T19:39:05.000Z',
            platform: {
              id: 1027,
              name: 'Ethereum',
              symbol: 'ETH',
              slug: 'ethereum',
              token_address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
            }
          },
          {
            id: 825,
            name: 'Tether',
            symbol: 'USDT',
            slug: 'tether',
            rank: 5,
            is_active: 1,
            first_historical_data: '2015-02-25T13:34:26.000Z',
            last_historical_data: '2021-09-18T19:39:19.000Z',
            platform: {
              id: 1027,
              name: 'Ethereum',
              symbol: 'ETH',
              slug: 'ethereum',
              token_address: '0xdac17f958d2ee523a2206206994597c13d831ec7'
            }
          },
          {
            id: 52,
            name: 'XRP',
            symbol: 'XRP',
            slug: 'xrp',
            rank: 6,
            is_active: 1,
            first_historical_data: '2013-08-04T18:51:05.000Z',
            last_historical_data: '2021-09-18T19:39:03.000Z',
            platform: null
          }
        ]
      })
    );
  }),

  rest.get('/api/convert', (req, res, ctx) => {
    const destination = req.url.searchParams.get('destination');
    const amount = req.url.searchParams.get('amount');
    return res(
      ctx.json({
        status: {
          timestamp: '2021-09-18T19:58:30.373Z',
          error_code: 0,
          error_message: null,
          elapsed: 19,
          credit_count: 1,
          notice: null
        },
        data: {
          id: 1,
          symbol: [`${destination}`],
          name: destination,
          amount: amount,
          last_updated: '2021-09-18T19:57:02.000Z',
          quote: { [`${destination}`]: { price: 28.062789092846057, last_updated: '2021-09-18T19:57:02.000Z' } }
        }
      })
    );
  }),

  //optional page
  rest.get('/api/optional', (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          plan: {
            credit_limit_daily: 4000,
            credit_limit_daily_reset: 'In 19 hours, 56 minutes',
            credit_limit_daily_reset_timestamp: '2021-09-29T00:00:00.000Z',
            credit_limit_monthly: 120000,
            credit_limit_monthly_reset: 'In 3 days, 19 hours, 56 minutes',
            credit_limit_monthly_reset_timestamp: '2021-10-01T00:00:00.000Z',
            rate_limit_minute: 60
          },
          usage: {
            current_minute: {
              requests_made: 30,
              requests_left: 30
            },
            current_day: {
              credits_used: 2346,
              credits_left: 1654
            },
            current_month: {
              credits_used: 75832,
              credits_left: 44168
            }
          }
        },
        status: {
          timestamp: '2021-09-17T08:09:59.204Z',
          error_code: 0,
          error_message: '',
          elapsed: 10,
          credit_count: 1
        }
      })
    );
  })
];
