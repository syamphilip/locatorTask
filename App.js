import React from 'react';
import {Text, View, Button} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import DisplayAllLoc from './Screens/DisplayAllLoc';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Find Location" component={Home} />
        <Stack.Screen name="Location Store" component={DisplayAllLoc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
