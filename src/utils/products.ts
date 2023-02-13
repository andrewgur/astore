import { ProductGroupType } from '../types/Product';
import groupsMock from '../mock/groups.json';
import { ReactImageGalleryItem } from 'react-image-gallery';

export const getProduct = (id: number): ProductGroupType | undefined => {
  const { groups } = groupsMock;

  return groups
    .reduce<ProductGroupType[]>((acc, group) => acc.concat(group.products), [])
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