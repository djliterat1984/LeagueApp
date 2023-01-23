import axios from 'axios';
import {CountryResponse} from '../../interfaces/CountriesInterface';
import {actions} from '../reducers/countryReducer';

const urlCountries =
  'https://apiv3.apifootball.com/?action=get_countries&APIkey=e804e01ec1b7e4043d738e61879fe8299930b978f38205daad9e9896d82d97c9';

export const loadCountriesAction = () => {
  return async (dispatch: any) => {
    const response = await axios
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
