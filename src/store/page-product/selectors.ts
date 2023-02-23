import { ApplicationState } from 'store';

export const pageProductSelector = (state: ApplicationState) => state.pageProduct;
export const isLoadingSelector = (state: ApplicationState) => pageProductSelector(state).isLoading;
export const hasErrorSelector = (state: ApplicationState) => pageProductSelector(state).hasError;
export const productSelector = (state: ApplicationState) => pageProductSelector(state).product;