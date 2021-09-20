import { useQuery } from 'react-query';

export const useUser = () =>
  useQuery(
    'user',
    async () => {
      const response = await fetch('https://randomuser.me/api/?inc=name,picture');
      const json = await response.json();
      if (json.error) {
        throw new Error('Fetch Random User response was not ok');
      }
      return json;
    },
    { refetchOnWindowFocus: false }
  );

export const useCryptocurrency = ({ current, pageSize }) =>
  useQuery(
    ['cryptocurrency', { current, pageSize }],
    async ({ queryKey }) => {
      const { current, pageSize } = queryKey[1];
      const response = await fetch(`/api/cryptocurrency?start=${current}&limit=${pageSize}`);
      const json = await response.json();
      if (json.error_code) {
        throw new Error(json.error_message);
      }
      return json;
    },
    { refetchOnWindowFocus: false }
  );

export const useCoin = () =>
  useQuery(
    'coin',
    async () => {
      const response = await fetch('/api/coin');
      const json = await response.json();
      if (json.error_code) {
        throw new Error(json.error_message);
      }
      return json;
    },
    { refetchOnWindowFocus: false }
  );

export const useConversion = ({ origin, destination, amount }) =>
  useQuery(
    ['convert', { origin, destination, amount }],
    async ({ queryKey }) => {
      const response = await fetch(`/api/convert?origin=${origin}&destination=${destination}&amount=${amount}`);
      const json = await response.json();
      if (json.error_code) {
        throw new Error(json.error_message);
      }
      return json;
    },
    {
      refetchOnWindowFocus: false,
      enabled: false // turned off by default, manual refetch is needed
    }
  );

export const useOptional = () =>
  useQuery(
    'convert',
    async () => {
      const response = await fetch(`/api/optional`);
      const json = await response.json();
      if (json.error_code) {
        throw new Error(json.error_message);
      }
      return json;
    },
    { refetchOnWindowFocus: false }
  );
