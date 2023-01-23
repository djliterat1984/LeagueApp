import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CountryResponse} from '../../interfaces/CountriesInterface';

interface AuthState {
  countries: CountryResponse[];
}

const INITIAL_STATE: AuthState = {
  countries: [],
};

const countrySlice = createSlice({
  name: 'country',
  initialState: INITIAL_STATE,
  reducers: {
    loadCountries: (state, actions: PayloadAction<CountryResponse[]>) => {
      state.countries = actions.payload;
    },
  },
});

export const {actions, reducer} = countrySlice;
