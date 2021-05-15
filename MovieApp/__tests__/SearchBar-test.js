import React from 'react';
import { render } from '@testing-library/react-native';
import SearchBar from '../components/SearchBar';

it('should render correct elements', () => {
  const { getByPlaceholderText } = render(<SearchBar />);

  getByPlaceholderText('Search Movies...');
});
