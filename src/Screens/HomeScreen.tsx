import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {CountryDetail} from '../Components/CountryDetail';
import {useAppDispatch, useAppSelector} from '../hooks/commonHooks';
import {
  CountryResponse,
  LeagueResponse,
} from '../interfaces/CountriesInterface';
import {loadCountriesAction} from '../redux/actions/indexActions';

export const HomeScreen = () => {
  //const [countryList, setCountries] = useState<CountryResponse[]>([]);
  const {navigate} = useNavigation();
  const dispatch = useAppDispatch();
  const {countries} = useAppSelector(state => state.countryReducer);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    dispatch(loadCountriesAction());
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
