import { ApplicationState } from 'store';

export const pageAlfaSelector = (state: ApplicationState) => state.pageAlfa;
export const isLoadingSelector = (state: ApplicationState) => pageAlfaSelector(state).isLoading;
export const hasErrorSelector = (state: ApplicationState) => pageAlfaSelector(state).hasError;
export const productsSelector = (state: ApplicationState) => pageAlfaSelector(state).products;