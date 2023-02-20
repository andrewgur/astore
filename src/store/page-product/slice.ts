import { CaseReducer, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProduct } from 'api/api';
import { ProductItemType } from 'types/Product';

type ProductPageStateType = {
  isLoading: boolean;
  hasError: boolean;
  product: ProductItemType | null;
};

const initialState: ProductPageStateType = {
  isLoading: false,
  hasError: false,
  product: null
};

const NAME = 'product-page';

const request: CaseReducer<ProductPageStateType> = (state) => {
  state.hasError = false;
  state.isLoading = true;
};

const success: CaseReducer<ProductPageStateType, PayloadAction<ProductItemType>> = (state, { payload }) => {
  state.product = payload;
  state.isLoading = false;
  state.hasError = false;
};

const failure: CaseReducer<ProductPageStateType> = (state) => {
  state.hasError = true;
  state.isLoading = false;
  console.log('FAILURE');
};

export const fetchProduct = createAsyncThunk(
  `${NAME}/get-product`,
  async (id: number) => {
    return getProduct(id);
  }
);

export const { actions: pageProductActions, reducer: pageProductReducer } = createSlice({
  name: NAME,
  initialState,
  reducers: {
    request,
    success,
    failure
  },
  extraReducers(builder) {
    builder.addCase(fetchProduct.pending, request);
    builder.addCase(fetchProduct.fulfilled, success);
    builder.addCase(fetchProduct.rejected, failure);
  },
});