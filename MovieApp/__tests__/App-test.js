import React from 'react';
import { render } from '@testing-library/react-native';

import MovieItem from '../components/MovieItem';

const mockMovie = {
  video: false,
  vote_average: 7.7,
  overview:
    "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
  release_date: '2021-04-07',
  title: 'Mortal Kombat',
  adult: false,
  backdrop_path: '/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
  id: 460465,
  genre_ids: [28, 14, 12],
  original_language: 'en',
  original_title: 'Mortal Kombat',
  poster_path: '/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg',
  vote_count: 2335,
  popularity: 5358.559,
  media_type: 'movie',
};

it('renders correctly', () => {
  render(<MovieItem movieInfo={mockMovie} />);
});

test('it works', () => {
  expect(true).toBeTruthy();
});
