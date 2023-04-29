import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { covid19Reducer } from 'src/features/covid19/slice';
const reducer = combineReducers({
  covid19: covid19Reducer,
});

export const store = configureStore({ reducer });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
