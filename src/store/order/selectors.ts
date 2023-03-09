import { ApplicationState } from 'store';

export const orderSelector = (state: ApplicationState) => state.order;
export const orderOpenSelector = (state: ApplicationState) => orderSelector(state).isOpen;
export const orderUserDataSelector = (state: ApplicationState) => orderSelector(state).userData;
export const orderDeliverySelector = (state: ApplicationState) => orderUserDataSelector(state).delivery;
export const orderLoading = (state: ApplicationState) => orderSelector(state).isLoading;
export const orderConfirmed = (state: ApplicationState) => orderSelector(state).confirmed;