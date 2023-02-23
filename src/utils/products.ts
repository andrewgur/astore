import { OptionShape } from '@alfalab/core-components/select/typings';
import { ReactImageGalleryItem } from 'react-image-gallery';

export const arrToOptions = (arr: string[] | number[]): OptionShape[] =>
  arr.map((item, key) => ({
    key: key.toString(),
    content: item
  }));

export const getImagesArr = (images: string[]): ReactImageGalleryItem[] => {
  return images.map(image => {
    return {
      original: image,
      thumbnail: image
    };
  });
};