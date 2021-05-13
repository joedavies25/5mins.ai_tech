import { API_KEY, API_URL } from '@env';

const getDiscover = async setStateMethod => {
  await fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => setStateMethod(data.results));
};

module.exports = {
  getDiscover,
};
