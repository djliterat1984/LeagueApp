import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  CountryResponse,
  LeagueResponse,
} from '../../interfaces/CountriesInterface';

interface AuthState {
  countries: CountryResponse[];
  leagues: LeagueResponse[];
}

const INITIAL_STATE: AuthState = {
  countries: [],
  leagues: [],
};

const countrySlice = createSlice({
  name: 'country',
  initialState: INITIAL_STATE,
  reducers: {
    loadCountries: (state, actions: PayloadAction<CountryResponse[]>) => {
      state.countries = actions.payload;
    },
    loadLeagues: (state, actions: PayloadAction<LeagueResponse[]>) => {
      state.leagues = actions.payload;
    },
  },
});

export const {actions, reducer} = countrySlice;
