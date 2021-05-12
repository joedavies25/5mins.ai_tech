import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import SearchBar from './components/searchBar';
import { API_KEY } from '@env';

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SearchBar />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222222',
    height: '100%',
  },
});

export default App;
