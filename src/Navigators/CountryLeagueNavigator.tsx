import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../Screens/HomeScreen';
import {LeagueScreen} from '../Screens/LeagueScreen';
import {LeagueResponse} from '../interfaces/CountriesInterface';

export type RootStackParams = {
  HomeScreen: undefined;
  LeagueScreen: {league: LeagueResponse[]};
};

const Stack = createStackNavigator<RootStackParams>();

export const CountryLeagueNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LeagueScreen" component={LeagueScreen} />
    </Stack.Navigator>
  );
};
