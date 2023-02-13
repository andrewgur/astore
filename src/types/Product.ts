export type ProductItemType = {
  id: number;
  preview: string;
  title: string;
  price: number;
  availability: boolean;
};
export type ProductGroupType = ProductItemType & {
  images: string[];
  subtitle?: string;
  description: string;
  colors?: string[];
  sizes?: string[];
  stickerNumbers?: number[];
};