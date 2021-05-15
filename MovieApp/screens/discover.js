import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { getTrendingResults } from '../apiServices';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const Discover = ({ navigation }) => {
  let [trending, setTrending] = useState([]);
  let [search, setSearch] = useState([]);

  useEffect(() => {
    getTrendingResults(setTrending);
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <StatusBar hidden="true" />
        <SearchBar setSearch={setSearch} />
        <MovieList
          trending={trending}
          searchResults={search}
          navigation={navigation}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#222222',
    height: '100%',
  },
  safeAreaContainer: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },
});

export default Discover;
