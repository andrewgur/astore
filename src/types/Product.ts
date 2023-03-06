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

export type ProductCartOptions = {
  stickerNumbers?: string;
  models?: string;
  colors?: string;
  sizes?: string;
};

export type ProductCartType = {
  id: number;
  preview: string;
  title: string;
  price: number;
  count: number;
  stickerNumbers?: string;
  models?: string;
  colors?: string;
  sizes?: string;
};

export type ProductAPIType = {
  id: number,
  totalPrice: number,
  totalCount: number,
  sticketNumber?: number;
  color?: string,
  size?: string,
  model?: string,
};