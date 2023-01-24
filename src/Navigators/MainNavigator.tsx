import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CountryScreen} from '../Screens/CountryScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {CountryLeagueNavigator} from './CountryLeagueNavigator';
import {LeagueScreen} from '../Screens/LeagueScreen';
import {LeagueResponse} from '../interfaces/CountriesInterface';

export type RootStackParams = {
  CountryScreen: undefined;
  LeagueScreen: {countryId: string};
  CountryLeague: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CountryScreen" component={CountryScreen} />
        <Stack.Screen name="LeagueScreen" component={LeagueScreen} />
        <Stack.Screen name="CountryLeague" component={CountryLeagueNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
