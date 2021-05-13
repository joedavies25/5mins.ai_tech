import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MovieItem from './movieItem';

const MovieList = ({ discover }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={discover}
        renderItem={({ item }) => {
          return (
            <View>
              <MovieItem movie={item} />
            </View>
          );
        }}
        keyExtractor={(_, idx) => idx}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
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
});

export default MovieList;
