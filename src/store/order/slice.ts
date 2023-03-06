import { CaseReducer, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createOrder } from 'api/api';
import { DELIVERY_TYPE } from 'constants/order';
import { ApplicationState } from 'store';
import { UserDataType } from 'types/Order';

const NAME = 'order';

type OrderStateType = {
  isOpen: boolean;
  hasError: boolean;
  isLoading: boolean;
  confirmed: boolean;
  userData: UserDataType;
};

const initialState: OrderStateType = {
  isOpen: false,
  hasError: false,
  isLoading: false,
  confirmed: false,
  userData: {
    name: '',
    email: '',
    phone: '',
    address: '',
    delivery: '0',
    comment: '',
    paymentType: 'Банковская карта'
  },
};

const setIsOpen: CaseReducer<OrderStateType, PayloadAction<boolean>> = (state, { payload }) => {
  state.isOpen = payload;
};

const setUserData: CaseReducer<OrderStateType, PayloadAction<UserDataType>> = (state, { payload }) => {
  state.userData = { ...payload };
};

const setConfirmed: CaseReducer<OrderStateType, PayloadAction<boolean>> = (state, { payload }) => {
  state.confirmed = payload;
};

const request: CaseReducer<OrderStateType> = (state) => {
  state.hasError = false;
  state.isLoading = true;
};

const success: CaseReducer<OrderStateType> = (state) => {
  state = { ...initialState, confirmed: true };
};

const failure: CaseReducer<OrderStateType> = (state) => {
  state.hasError = true;
  state.isLoading = false;
};

export const sendOrder = createAsyncThunk(
  `${NAME}/create`,
  async (_: void, { getState }) => {
    const state = getState() as ApplicationState;
    const products = state.cart.products.map(product => ({
      id: product.id,
      totalPrice: product.price * product.count,
      totalCount: product.count,
      ...(product.stickerNumbers && { stickerNumber: product.stickerNumbers }),
      ...(product.colors && { color: product.colors }),
      ...(product.sizes && { size: product.sizes }),
      ...(product.models && { model: product.models }),
    }));
    const orderData = {
      ...state.order.userData,
      deliveryType: DELIVERY_TYPE[state.order.userData.delivery],
      products
    };

    return createOrder(orderData);
  }
);

export const { actions: orderActions, reducer: orderReducer } = createSlice({
  name: NAME,
  initialState,
  reducers: {
    setIsOpen,
    setUserData,
    setConfirmed,
    request,
    success,
    failure
  },
  extraReducers: (builder) => {
    builder.addCase(sendOrder.pending, request);
    builder.addCase(sendOrder.fulfilled, success);
    builder.addCase(sendOrder.rejected, failure);
  }
});