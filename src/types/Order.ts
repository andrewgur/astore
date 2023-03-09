import { DELIVERY_TYPE } from 'constants/order';
import { ProductAPIType } from './Product';

export type UserDataType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  delivery: keyof typeof DELIVERY_TYPE;
  comment: string;
  paymentType: string;
};

export type OrderAPIType = UserDataType & {
  products: ProductAPIType[];
};