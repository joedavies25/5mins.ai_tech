import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Discover from './screens/discover';
import Info from './screens/info';
import { createStackNavigator } from '@react-navigation/stack';
// import { getDiscover } from './apiServices';

const Stack = createStackNavigator();

const App = () => {
  // useEffect(() => {
  //   getDiscover(setDiscover);
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Discover"
          component={Discover}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Info"
          component={Info}
          options={{
            headerStyle: {
              backgroundColor: '#222222',
              borderBottomWidth: 3,
              borderBottomColor: '#900',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
