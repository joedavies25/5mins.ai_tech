import { API_KEY, API_URL } from '@env';

const getDiscover = async setStateMethod => {
  await fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => setStateMethod(data.results))
    .catch(err => console.error(err));
};

const getSearchResults = async (setStateMethod, searchInput) => {
  if (searchInput) {
    await fetch(
      `${API_URL}/search/movie?api_key=${API_KEY}&query=${searchInput}`,
    )
      .then(response => response.json())
      .then(data => {
        if (data.results[0]) {
          setStateMethod(data.results);
        } else {
          setStateMethod(['No Results']);
        }
      })
      .catch(err => console.error(err));
  } else {
    setStateMethod([]);
  }
};

module.exports = {
  getDiscover,
  getSearchResults,
};
