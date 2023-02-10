import React, { FC } from 'react';
import { ProductList } from '../components/ProductList/ProductList';
import cls from './../components/Page/page.module.css';
import productsMock from '../mock/products.json';

export const AlfaMadePage: FC = () => {
  const { products } = productsMock

  return (
    <div className='wrapper'>
      <div>
        <h1 className={cls.page__header}>Сделано в Альфе</h1>
        <p className={cls.page__text}>Хотим каждую из этих вещей! Себе, родным и друзьям</p>
      </div>
      <ProductList products={products} />
    </div>
  );
};