import axios from 'axios';
import { GroupType } from 'types/Group';
import { OrderAPIType } from 'types/Order';
import { ProductItemType } from 'types/Product';

export const API_INSTANCE = axios.create({
  baseURL: 'http://qa-games.ru/astore/'
});

export const getProductsAlfa = async (): Promise<ProductItemType[]> => {
  return API_INSTANCE
    .get('/made-in-alfa')
    .then(res => res.data);
};

export const getProductsCustom = async (): Promise<GroupType[]> => {
  return API_INSTANCE
    .get('/your-design')
    .then(res => res.data);
};

export const getProduct = async (id: number): Promise<ProductItemType> => {
  return API_INSTANCE
    .get(`/product/${id}`)
    .then(res => res.data);
};

export const createOrder = async (data: OrderAPIType): Promise<ProductItemType> => {
  return API_INSTANCE
    .post('/create-order', data)
    .then(res => res.data);
};
