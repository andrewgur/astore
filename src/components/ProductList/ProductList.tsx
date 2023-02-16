import React, { FC } from 'react';
import { Grid } from '@alfalab/core-components/grid';
import { ProductItemType } from '../../types/Product';
import { ProductListItem } from './ProductListItem/ProductListItem';
import cls from './productList.module.css';

type ProductListProps = {
  products: ProductItemType[];
};

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <Grid.Row justify='left' className={cls.productList} dataTestId='ProductList'>
      {products.map(product => (
        <Grid.Col width={{ mobile: 12, tablet: 6, desktop: 4 }} key={product.id} dataTestId="ProductListItem">
          <ProductListItem {...product} />
        </Grid.Col>)
      )}
    </Grid.Row>
  );
};