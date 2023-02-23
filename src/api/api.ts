import axios from 'axios';
import { GroupType } from 'types/Group';
import { ProductItemType } from 'types/Product';

export const API_INSTANCE = axios.create({
  baseURL: 'http://qa-games.ru/astore/'
});

//TODO typization
//TODO try/catch
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
