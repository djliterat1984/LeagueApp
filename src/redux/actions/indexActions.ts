import axios from 'axios';
import leagueApi from '../../api/leagueApi';
import {
  CountryResponse,
  LeagueResponse,
} from '../../interfaces/CountriesInterface';
import {actions} from '../reducers/countryReducer';

export const loadCountriesAction = () => {
  const urlCountries = `/?action=get_countries&APIkey=e804e01ec1b7e4043d738e61879fe8299930b978f38205daad9e9896d82d97c9`;
  return async (dispatch: any) => {
    await leagueApi
      .get<CountryResponse[]>(urlCountries)
      .then(resp =>
        dispatch(
          actions.loadCountries(
            resp.data.sort((a, b) => {
              if (a.country_name > b.country_name) return 1;
              else if (a.country_name < b.country_name) return -1;
              else return 0;
            }),
          ),
        ),
      )
      .catch(error => console.log(error));
  };
};

export const loadLeaguesAction = (countryId: string) => {
  const urlLeagues = `/?action=get_leagues&country_id=${countryId}&APIkey=e804e01ec1b7e4043d738e61879fe8299930b978f38205daad9e9896d82d97c9`;
  return async (dispatch: any) => {
    await leagueApi
      .get<LeagueResponse[]>(urlLeagues)
      .then(resp => dispatch(actions.loadLeagues(resp.data)))
      .catch(error => console.log(error));
  };
};
