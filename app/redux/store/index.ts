import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '@/app/redux/slices/basketSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
