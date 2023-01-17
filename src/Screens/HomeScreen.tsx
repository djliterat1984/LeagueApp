import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {CountryDetail} from '../Components/CountryDetail';
import {
  CountryResponse,
  LeagueResponse,
} from '../interfaces/CountriesInterface';

export const HomeScreen = () => {
  const [countries, setCountries] = useState<CountryResponse[]>([]);
  const {navigate} = useNavigation();

  useEffect(() => {
    getCountries();
  }, []);

  const urlCountries =
    'https://apiv3.apifootball.com/?action=get_countries&APIkey=e804e01ec1b7e4043d738e61879fe8299930b978f38205daad9e9896d82d97c9';
  const getCountries = async () => {
    const response = await axios
      .get<CountryResponse[]>(urlCountries)
      .then(resp =>
        setCountries(
          resp.data.sort((a, b) => {
            if (a.country_name > b.country_name) return 1;
            else if (a.country_name < b.country_name) return -1;
            else return 0;
          }),
        ),
      )
      .catch(error => console.log(error));
  };

  const onPress = async (countryId: string) => {
    const resp = await axios.get<LeagueResponse[]>(
      `https://apiv3.apifootball.com/?action=get_leagues&country_id=${countryId}&APIkey=e804e01ec1b7e4043d738e61879fe8299930b978f38205daad9e9896d82d97c9`,
    );
    console.log(resp.data);

    navigate('LeagueScreen', {league: resp.data});
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
      }}>
      <FlatList
        data={countries}
        keyExtractor={(item, index) => item.country_id}
        renderItem={({item, index}) => (
          <CountryDetail
            country={item}
            onPress={countryId => onPress(countryId)}
          />
        )}
        numColumns={3}
      />
    </View>
  );
};
