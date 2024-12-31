import {configureStore} from '@reduxjs/toolkit';
import goodReducer from '../../features/good/model';

export const store = configureStore({
  reducer: {
    good: goodReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
