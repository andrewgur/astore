import { CaseReducer, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductsAlfa } from 'api/api';
import { ProductItemType } from './../../types/Product';

type AlfaPageStateType = {
  isLoading: boolean;
  hasError: boolean;
  products: ProductItemType[];
};

const initialState: AlfaPageStateType = {
  isLoading: false,
  hasError: false,
  products: []
};

const NAME = 'page-alfa';

const request: CaseReducer<AlfaPageStateType> = (state) => {
  state.hasError = false;
  state.isLoading = true;
};

const success: CaseReducer<AlfaPageStateType, PayloadAction<ProductItemType[]>> = (state, { payload }) => {
  state.products = payload;
  state.isLoading = false;
  state.hasError = false;
};

const failure: CaseReducer<AlfaPageStateType> = (state) => {
  state.hasError = true;
  state.isLoading = false;
};

export const fetchProducts = createAsyncThunk(
  `${NAME}/products`,
  async () => {
    return getProductsAlfa();
  }
);

export const { actions: pageAlfaActions, reducer: pageAlfaReducer } = createSlice({
  name: NAME,
  initialState,
  reducers: {
    request,
    success,
    failure
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, request);
    builder.addCase(fetchProducts.fulfilled, success);
    builder.addCase(fetchProducts.rejected, failure);
  }
});