import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDataType } from 'types/Order';

const NAME = 'order';

type OrderStateType = {
  isOpen: boolean;
  userData: UserDataType;
};

const initialState: OrderStateType = {
  isOpen: false,
  userData: {
    name: '',
    email: '',
    phone: '',
    address: '',
    delivery: '0',
    comment: '',
    payment: ''
  }
};

const setIsOpen: CaseReducer<OrderStateType, PayloadAction<boolean>> = (state, { payload }) => {
  state.isOpen = payload;
};

const setUserData: CaseReducer<OrderStateType, PayloadAction<UserDataType>> = (state, { payload }) => {
  state.userData = { ...payload };
};

export const { actions: orderActions, reducer: orderReducer } = createSlice({
  name: NAME,
  initialState,
  reducers: {
    setIsOpen,
    setUserData
  }
});