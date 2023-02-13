import React, { FC } from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './product.gallery.css';

type ProductGalleryProps = {
  images: ReactImageGalleryItem[];
};

export const ProductGallery: FC<ProductGalleryProps> = ({ images }) => {
  return (
    <div className="image__gallery">
      <ImageGallery
        items={images}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        additionalClass='gallery'
        />
    </div>
  )
 };