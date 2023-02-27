import { Grid } from '@alfalab/core-components/grid';
import React, { FC } from 'react';
import { ProductCartOptions, ProductItemType } from '../../types/Product';
import { arrToOptions, getImagesArr } from '../../utils/products';
import { ProductGallery } from './ProductGallery/ProductGallery';
import cls from './product.module.css';
import { ProductInfo } from './ProductInfo/ProductInfo';
import { useAppDispatch } from 'store';
import { cartActions } from 'store/cart';

export const Product: FC<ProductItemType> = ({ id, images, title, price, description, colors, sizes, models, stickerNumbers, preview }) => {
  const galleryImages = getImagesArr(images);
  const colorsOpt = colors ? arrToOptions(colors) : colors;
  const sizesOpt = sizes ? arrToOptions(sizes) : sizes;
  const modelsOpt = models ? arrToOptions(models) : models;
  const stickerOpt = stickerNumbers ? arrToOptions(stickerNumbers) : stickerNumbers;

  const dispatch = useAppDispatch();

  const handleAdd = (data: ProductCartOptions) => {
    dispatch(cartActions.add({ id, title, price, preview, count: 1, ...data }));
  };

  return (
    <div className={cls.product}>
      <Grid.Row>
        <Grid.Col width={{ desktop: 6, tablet: { s: 12, m: 6 }, mobile: 12 }}>
          <ProductGallery images={galleryImages} />
        </Grid.Col>
        <Grid.Col width={{ desktop: 6, tablet: { s: 12, m: 6 }, mobile: 12 }}>
          <ProductInfo
            title={title}
            price={price}
            description={description}
            colors={colorsOpt}
            sizes={sizesOpt}
            models={modelsOpt}
            stickerNumbers={stickerOpt}
            handleAdd={handleAdd}
          />
        </Grid.Col>
      </Grid.Row>
    </div>
  );
};