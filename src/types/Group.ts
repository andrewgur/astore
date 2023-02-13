import { ProductGroupType } from './Product';

export type GroupType = {
  id: number;
  title: string;
  description: string;
  products: ProductGroupType[];
};