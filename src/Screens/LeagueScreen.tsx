import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {LeagueDetails} from '../Components/LeagueDetails';
import {RootStackParams} from '../Navigators/CountryLeagueNavigator';

interface Props extends StackScreenProps<RootStackParams, 'LeagueScreen'> {}

export const LeagueScreen = ({navigation, route}: Props) => {
  const {league} = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        {league[0].country_name === 'USA' ? (
          <Image
            source={require('../assets/usaFlag.png')}
            style={{height: 30, width: 60, marginRight: 10}}
          />
        ) : (
          league[0].country_logo && (
            <Image
              source={{uri: league[0].country_logo}}
              style={{height: 30, width: 60, marginRight: 10}}
            />
          )
        )}
        <Text style={{fontSize: 20}}>{league[0].country_name}</Text>
      </View>

      <FlatList
        data={league}
        keyExtractor={(item, index) => item.league_id}
        renderItem={({item}) => <LeagueDetails competition={item} />}
      />
    </View>
  );
};
