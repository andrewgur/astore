import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { cartReducer } from './cart';
import { orderReducer } from './order/slice';
import { pageAlfaReducer } from './page-alfa/slice';
import { pageCustomReducer } from './page-custom';
import { pageProductReducer } from './page-product/slice';
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'a-store/cart',
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    pageAlfa: pageAlfaReducer,
    pageCustom: pageCustomReducer,
    pageProduct: pageProductReducer,
    cart: persistedCartReducer,
    order: orderReducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })

});

export const persistor = persistStore(store);

export type ApplicationState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;