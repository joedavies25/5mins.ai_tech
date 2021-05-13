import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import SearchBar from './components/searchBar';
import MovieList from './components/movieList';
import { API_KEY } from '@env';
import { getDiscover } from './apiServices';

const App = () => {
  let [discover, setDiscover] = useState([]);

  useEffect(() => {
    getDiscover(setDiscover);
  }, []);

  useEffect(() => {
    console.log(discover);
  }, [discover]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <SearchBar />
        <MovieList discover={discover} />
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

export default App;
