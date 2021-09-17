import { useQuery } from 'react-query';

export const useUser = () =>
  useQuery('user', async () => {
    const response = await fetch('https://randomuser.me/api/?inc=name,picture');
    const json = await response.json();
    if (json.error) {
      throw new Error('Fetch Random User response was not ok');
    }
    return json;
  });
