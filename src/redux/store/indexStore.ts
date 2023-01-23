import {configureStore} from '@reduxjs/toolkit';
import {curryGetDefaultMiddleware} from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import {rootReducer} from '../reducers/indexReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: curryGetDefaultMiddleware =>
    curryGetDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootStoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
