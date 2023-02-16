import { ProductItemType } from '../types/Product';
import productsMock from '../mock/products.json';
import { ReactImageGalleryItem } from 'react-image-gallery';

export const getProduct = (id: number): ProductItemType | undefined => {
  const products: ProductItemType[] = productsMock.products.concat(productsMock.customProducts);

  return products
    .find(product => product.id === id);
};

export const getImagesArr = (images: string[]): ReactImageGalleryItem[] => {
  return images.map(image => {
    return {
      original: image,
      thumbnail: image
    };
  });
};