import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Info = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#18191A',
  },
  text: {
    color: 'white',
  },
});

export default Info;
