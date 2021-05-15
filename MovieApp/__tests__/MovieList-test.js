import React from 'react';
import { render } from '@testing-library/react-native';
import { mockTrendingResults, mockSearchResults } from '../mocks';
import MovieList from '../components/MovieList';

it('should render trending movies when search results are empty', () => {
  const { getAllByTestId } = render(
    <MovieList trending={mockTrendingResults} searchResults={[]} />,
  );

  expect(getAllByTestId('MovieItem').length).toBe(3);
});

it('should render search results', () => {
  const { getAllByTestId } = render(
    <MovieList
      trending={mockTrendingResults}
      searchResults={mockSearchResults}
    />,
  );

  expect(getAllByTestId('MovieItem').length).toBe(2);
});

it('should render "No Results" when no matching results', () => {
  const { queryAllByTestId, getByText } = render(
    <MovieList trending={mockTrendingResults} searchResults={['No Results']} />,
  );

  expect(queryAllByTestId('MovieItem').length).toBe(0);
  getByText('No Results');
});
