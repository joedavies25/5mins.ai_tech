import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { mockMovie } from '../mocks';
import MovieItem from '../components/MovieItem';

it('should render correct elements', () => {
  const { getByText, getByTestId } = render(
    <MovieItem movieInfo={mockMovie} />,
  );

  getByTestId('poster');
  getByText(mockMovie.title);
  getByText(mockMovie.overview.slice(0, 100) + '...');
});

it('should navigate to info page with correct params', () => {
  const navigateMock = jest.fn();

  const { getByTestId } = render(
    <MovieItem movieInfo={mockMovie} navigation={{ navigate: navigateMock }} />,
  );

  fireEvent.press(getByTestId('movieItem'));
  expect(navigateMock).toBeCalledWith('Info', { movieInfo: mockMovie });
});
