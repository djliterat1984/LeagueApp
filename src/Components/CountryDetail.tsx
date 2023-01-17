import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {CountryResponse} from '../interfaces/CountriesInterface';

interface Props {
  country: CountryResponse;
  onPress: (countryId: string) => void;
}

export const CountryDetail = ({country, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={{marginRight: 10, marginBottom: 20}}
      onPress={() => onPress(country.country_id)}>
      <Text
        style={{width: 100, fontSize: 18}}
        lineBreakMode="tail"
        numberOfLines={1}>
        {country.country_name}
      </Text>
      {country.country_logo !== '' ? (
        country.country_name === 'USA' ? (
          <Image
            source={require('../assets/usaFlag.png')}
            style={{height: 70, width: 100}}
          />
        ) : (
          <Image
            source={{uri: country.country_logo}}
            style={{height: 70, width: 100}}
          />
        )
      ) : (
        <View style={{width: 100, backgroundColor: 'green', height: 70}} />
      )}
    </TouchableOpacity>
  );
};
