import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';

import {CountryDetail} from '../Components/CountryDetail';
import {useAppDispatch, useAppSelector} from '../hooks/commonHooks';
import {RootStackParams} from '../Navigators/MainNavigator';
import {
  loadCountriesAction,
  loadLeaguesAction,
} from '../redux/actions/indexActions';

interface Props extends StackScreenProps<RootStackParams, 'CountryScreen'> {}

export const CountryScreen = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const {countries, leagues} = useAppSelector(state => state.countryReducer);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    dispatch(loadCountriesAction());
  };

  const onSelectCountry = async (countryId: string) => {
    navigation.navigate('LeagueScreen', {countryId});
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
      }}>
      <FlatList
        data={countries}
        keyExtractor={(item, index) => item.country_id}
        renderItem={({item, index}) => (
          <CountryDetail
            country={item}
            onPress={countryId => onSelectCountry(countryId)}
          />
        )}
        numColumns={3}
      />
    </View>
  );
};
