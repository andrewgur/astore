import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductCartType } from './../../types/Product';
import isEqual from 'lodash/isEqual';
import { omit } from 'lodash';

type CartStateType = {
  products: ProductCartType[];
  totalPrice: number;
  totalCount: number;
  cartOpen: boolean;
};

const initialState: CartStateType = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
  cartOpen: false
};

const NAME = 'cart';

const searchProductIndex = (products: ProductCartType[], payload: ProductCartType): number => {
  return products.findIndex(product => isEqual(
    omit(product, ['count']),
    omit(payload, ['count'])
  ));
};

const add: CaseReducer<CartStateType, PayloadAction<ProductCartType>> = (state, { payload }) => {
  const index = searchProductIndex(state.products, payload);

  if (index !== -1) {
    state.products[index].count += payload.count;
  } else {
    state.products.push(payload);
  }

  state.totalCount += payload.count;
  state.totalPrice += payload.price * payload.count;
};

const update: CaseReducer<CartStateType, PayloadAction<ProductCartType>> = (state, { payload }) => {
  const index = searchProductIndex(state.products, payload);
  const current = state.products[index];

  state.totalPrice += current.price * payload.count - current.price * current.count;
  state.totalCount = state.totalCount - current.count + payload.count;

  current.count = payload.count;
};

const remove: CaseReducer<CartStateType, PayloadAction<ProductCartType>> = (state, { payload }) => {
  state.products = state.products.filter(product => !isEqual(product, payload));

  state.totalCount -= payload.count;
  state.totalPrice -= payload.price * payload.count;

  if (!state.totalCount) {
    state.cartOpen = false;
  }
};

const setCartOpen: CaseReducer<CartStateType, PayloadAction<boolean>> = (state, { payload }) => {
  state.cartOpen = payload;
};

export const { actions: cartActions, reducer: cartReducer } = createSlice({
  name: NAME,
  initialState,
  reducers: {
    add,
    update,
    remove,
    setCartOpen
  }
});