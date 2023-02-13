import { Grid } from '@alfalab/core-components/grid';
import React, { FC } from 'react';
import { ProductGroupType } from '../../types/Product';
import { getImagesArr } from '../../utils/products';
import { ProductGallery } from './ProductGallery/ProductGallery';
import cls from './product.module.css';

export const Product: FC<ProductGroupType> = ({ images }) => {
  const galleryImages = getImagesArr(images)

  return (
    <div className={cls.product}>
      <Grid.Row>
        <Grid.Col width={{desktop: 6, tablet: 12, mobile: 6}}>
          <ProductGallery images={ galleryImages } />
        </Grid.Col>
        <Grid.Col width={{desktop: 6, tablet: 12, mobile: 6}}>
        </Grid.Col>
      </Grid.Row>
    </div>
  )
 };