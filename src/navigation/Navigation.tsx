import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import {Movie} from '../interfaces/movieinterface';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
