import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '81c5670f1dmsh4123b7889f6ba48p1d932ajsna9ce5184a2fc',
    },
  });

  return data;
};
