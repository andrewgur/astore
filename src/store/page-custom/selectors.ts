import { ApplicationState } from 'store';

export const pageCustomSelector = (state: ApplicationState) => state.pageCustom;
export const isLoadingSelector = (state: ApplicationState) => pageCustomSelector(state).isLoading;
export const hasErrorSelector = (state: ApplicationState) => pageCustomSelector(state).hasError;
export const groupsSelector = (state: ApplicationState) => pageCustomSelector(state).groups;