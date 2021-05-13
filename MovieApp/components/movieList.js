import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const MovieList = ({ discover }) => {
  const data = [{ fruit: 'apple' }, { fruit: 'pear' }, { fruit: 'banana' }];

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={discover}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.text}>{item.title}</Text>
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
  },
  list: {
    flex: 1,
    width: '100%',
  },
  text: {
    color: 'white',
  },
});

export default MovieList;
