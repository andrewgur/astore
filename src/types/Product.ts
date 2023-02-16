export type ProductItemType = {
  id: number;
  preview: string;
  title: string;
  price: number;
  availability: boolean;
  images: string[];
  description: string;
  subtitle?: string;
  stickerNumbers?: number[];
  models?: string[];
  colors?: string[];
  sizes?: string[];
};