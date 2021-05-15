import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MovieItem from './MovieItem';

const MovieList = ({ trending, searchResults, navigation }) => {
  const data = searchResults[0] ? searchResults : trending;

  return (
    <View style={styles.container}>
      {searchResults[0] !== 'No Results' ? (
        <FlatList
          style={styles.list}
          data={data}
          renderItem={({ item }) => {
            return (
              <View testID="MovieItem">
                <MovieItem
                  movieInfo={item}
                  navigation={navigation}
                  testID="MovieItem"
                />
              </View>
            );
          }}
          keyExtractor={movie => movie.id}
        />
      ) : (
        <Text style={styles.noResults}>No Results</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#18191A',
  },
  list: {
    flex: 1,
  },
  text: {
    color: 'white',
  },
  image: {
    height: 20,
    width: 10,
  },
  noResults: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    padding: '15%',
  },
});

export default MovieList;
