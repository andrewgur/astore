import { Grid } from '@alfalab/core-components/grid';
import React, { FC } from 'react';
import { ProductItemType } from '../../types/Product';
import { getImagesArr } from '../../utils/products';
import { ProductGallery } from './ProductGallery/ProductGallery';
import cls from './product.module.css';
import { ProductInfo } from './ProductInfo/ProductInfo';

export const Product: FC<ProductItemType> = ({ images, title, price, description, colors, sizes, models, stickerNumbers }) => {
  const galleryImages = getImagesArr(images)

  return (
    <div className={cls.product}>
      <Grid.Row>
        <Grid.Col width={{desktop: 6, tablet: {s: 12, m: 6}, mobile: 12}}>
          <ProductGallery images={ galleryImages } />
        </Grid.Col>
        <Grid.Col width={{desktop: 6, tablet: { s: 12, m: 6}, mobile: 12}}>
          <ProductInfo
            title={title}
            price={price}
            description={description}
            colors={colors}
            sizes={sizes}
            models={models}
            stickerNumbers={stickerNumbers}
          />
        </Grid.Col>
      </Grid.Row>
    </div>
  )
};