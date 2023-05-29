import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './Features/BasketSlice';
import resturantReducer from './Features/ResturantSlice';
export const store = configureStore({
  reducer: {
    basket : basketReducer,
    resturant : resturantReducer,
  },
});