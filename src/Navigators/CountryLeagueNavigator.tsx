import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {SettingsScreen} from '../Screens/SettingsScreen';
import {StandingsScreen as StandingsScreen} from '../Screens/StandingsScreen';

export type RootStackParams = {
  StandingsScreen: undefined;
  SettingsScreen: undefined;
};

const Tabs = createBottomTabNavigator<RootStackParams>();

export const CountryLeagueNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="StandingsScreen"
        component={StandingsScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
