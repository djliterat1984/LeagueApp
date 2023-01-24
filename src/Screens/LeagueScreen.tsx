import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {LeagueDetails} from '../Components/LeagueDetails';
import {useAppDispatch, useAppSelector} from '../hooks/commonHooks';
import {RootStackParams} from '../Navigators/MainNavigator';
import {loadLeaguesAction} from '../redux/actions/indexActions';

interface Props extends StackScreenProps<RootStackParams, 'LeagueScreen'> {}

export const LeagueScreen = ({navigation, route}: Props) => {
  const {countryId} = route.params;
  const dispatch = useAppDispatch();
  const {leagues} = useAppSelector(state => state.countryReducer);

  useEffect(() => {
    getLeagues();
  }, []);

  const getLeagues = () => {
    dispatch(loadLeaguesAction(countryId));
  };

  const goToDetails = () => {
    navigation.navigate('CountryLeague');
  };

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
        {leagues[0].country_name === 'USA' ? (
          <Image
            source={require('../assets/usaFlag.png')}
            style={{height: 30, width: 60, marginRight: 10}}
          />
        ) : (
          leagues[0].country_logo && (
            <Image
              source={{uri: leagues[0].country_logo}}
              style={{height: 30, width: 60, marginRight: 10}}
            />
          )
        )}
        <Text style={{fontSize: 20}}>{leagues[0].country_name}</Text>
      </View>

      <FlatList
        data={leagues}
        keyExtractor={(item, index) => item.league_id}
        numColumns={3}
        renderItem={({item}) => (
          <LeagueDetails competition={item} onPress={() => goToDetails()} />
        )}
        contentContainerStyle={{justifyContent: 'space-evenly'}}
      />
    </View>
  );
};
