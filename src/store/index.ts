import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homeReducer from '../page/Home/homeSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
