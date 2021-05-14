import React, { useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { getSearchResults } from '../apiServices';

const SearchBar = ({ setSearch }) => {
  const onSearch = e => {
    getSearchResults(setSearch, e);
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={25} color="white" />
      <TextInput
        style={styles.input}
        placeholder="Search Movies..."
        placeholderTextColor="white"
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#222222',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: '#900',
    borderBottomWidth: 3,
    flex: 1,
  },
  input: {
    color: 'white',
    backgroundColor: '#900',
    width: '70%',
    height: '65%',
    paddingLeft: '5%',
    paddingRight: '5%',
    borderRadius: 5,
  },
});

export default SearchBar;
