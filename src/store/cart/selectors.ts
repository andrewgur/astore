import { ApplicationState } from 'store';

export const cartSelector = (state: ApplicationState) => state.cart;
export const productsSelector = (state: ApplicationState) => cartSelector(state).products;
export const totalPriceSelector = (state: ApplicationState) => cartSelector(state).totalPrice;
export const totalCountSelector = (state: ApplicationState) => cartSelector(state).totalCount;
export const cartOpenSelector = (state: ApplicationState) => cartSelector(state).cartOpen;