import {combineReducers} from 'redux';
import {reducer as countryReducer} from './countryReducer';

export const rootReducer = combineReducers({
  countryReducer,
});

export type RootReducerState = ReturnType<typeof rootReducer>;
