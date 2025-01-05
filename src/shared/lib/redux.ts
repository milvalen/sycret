import {configureStore} from '@reduxjs/toolkit';
import goodReducer from '../../features/good/model';
import saleReducer from '../../features/sale/model';

export const store = configureStore({
  reducer: {
    good: goodReducer,
    sale: saleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
