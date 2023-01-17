import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../Screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SettingsScreen} from '../Screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {CountryLeagueNavigator} from './CountryLeagueNavigator';

export type RootStackParams = {
  CountryLeague: undefined;
  SettingsScreen: undefined;
};

const Tab = createBottomTabNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="CountryLeague"
          component={CountryLeagueNavigator}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color, size}) => (
              <Icon name="settings" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
