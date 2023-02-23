import { CaseReducer, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductsCustom } from 'api/api';
import { GroupType } from 'types/Group';

type CustomPageStateType = {
  isLoading: boolean;
  hasError: boolean;
  groups: GroupType[];
};

const initialState: CustomPageStateType = {
  isLoading: false,
  hasError: false,
  groups: []
};

const NAME = 'page-custom';

const request: CaseReducer<CustomPageStateType> = (state) => {
  state.hasError = false;
  state.isLoading = true;
};

const success: CaseReducer<CustomPageStateType, PayloadAction<GroupType[]>> = (state, { payload }) => {
  state.groups = payload;
  state.isLoading = false;
  state.hasError = false;
};

const failure: CaseReducer<CustomPageStateType> = (state) => {
  state.hasError = true;
  state.isLoading = false;
};

export const fetchGroups = createAsyncThunk(
  `${NAME}/groups`,
  async () => {
    return getProductsCustom();
  }
);

export const { actions: pageCustomActions, reducer: pageCustomReducer } = createSlice({
  name: NAME,
  initialState,
  reducers: {
    request,
    success,
    failure
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGroups.pending, request);
    builder.addCase(fetchGroups.fulfilled, success);
    builder.addCase(fetchGroups.rejected, failure);
  }
});