// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Discover from './screens/Discover';
import Info from './screens/Info';
// import { getTrendingResults } from './apiServices';

const Stack = createStackNavigator();

const App = () => {
  // useEffect(() => {
  //   getTrendingResults(setDiscover);
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
