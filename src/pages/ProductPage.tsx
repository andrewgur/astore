import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../components/Product/Product';
import { getProduct } from '../utils/products';
import { NotFound } from './NotFound';

export const ProductPage: FC = () => { 
  const { id } = useParams() as { id: string };
  const product = getProduct(+id);

  if (!product) {
    return(<NotFound />)
  }

  return (
    <div className='wrapper'>
      <Product {...product}/>
    </div>
  );
};