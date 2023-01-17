import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {LeagueResponse} from '../interfaces/CountriesInterface';

interface Props {
  competition: LeagueResponse;
}

export const LeagueDetails = ({competition}: Props) => {
  console.log(competition.league_logo);

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
				marginVertical:10,
        backgroundColor: 'lightgray',
      }}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          textAlignVertical: 'center',
					paddingHorizontal: 10,
					paddingVertical:10,
          backgroundColor: 'lightgray',
        }}>
        {competition.league_name}
      </Text>
    </TouchableOpacity>
  );
};
