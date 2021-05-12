import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { API_KEY } from '@env';

const App = () => {
  return (
    <SafeAreaView>
      <Text>{API_KEY}</Text>
    </SafeAreaView>
  );
};

export default App;
