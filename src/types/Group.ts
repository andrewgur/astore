import { ProductItemType } from './Product';

export type GroupType = {
  id: number;
  title: string;
  description: string;
  products: ProductItemType[];
};