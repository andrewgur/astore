import React, { FC } from 'react';
import { PageHeader } from '../components/Page/PageHeader';
import { ProductList } from '../components/ProductList/ProductList';
import productsMock from '../mock/products.json';

export const AlfaMadePage: FC = () => {
  const { products } = productsMock

  return (
    <div className='wrapper'>
      <PageHeader
        title='Сделано в Альфе'
        description='Хотим каждую из этих вещей! Себе, родным и друзьям'
      />      
      <ProductList products={products} />
    </div>
  );
};