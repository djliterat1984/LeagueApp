import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {LeagueResponse} from '../interfaces/CountriesInterface';

interface Props {
  competition: LeagueResponse;
  onPress: () => void;
}

export const LeagueDetails = ({competition, onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal:5,
        backgroundColor: 'white',
      }}>
      <View>
        {competition.league_logo ? (
          <Image
            source={{uri: competition.league_logo}}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
              backgroundColor: 'white',
            }}
          />
        ) : (
          <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
        )}
        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            textAlignVertical: 'center',
            paddingHorizontal: 10,
            paddingVertical: 10,
            width: 100,
            backgroundColor: 'white',
          }}
          numberOfLines={2}
          lineBreakMode="head">
          {competition.league_name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
