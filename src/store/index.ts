import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { cartReducer } from './cart';
import { pageAlfaReducer } from './page-alfa/slice';
import { pageCustomReducer } from './page-custom';
import { pageProductReducer } from './page-product/slice';

export const store = configureStore({
  reducer: {
    pageAlfa: pageAlfaReducer,
    pageCustom: pageCustomReducer,
    pageProduct: pageProductReducer,
    cart: cartReducer
  },
  devTools: true
});

export type ApplicationState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;