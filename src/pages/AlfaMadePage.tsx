import React, { FC, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchProducts, hasErrorSelector, isLoadingSelector, productsSelector } from '../store/page-alfa';
import { PageHeader } from '../components/Page/PageHeader';
import { ProductList } from '../components/ProductList/ProductList';
import { Loader } from 'components/Loader/Loader';
import { Retry } from 'components/Retry/Retry';

export const AlfaMadePage: FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingSelector);
  const hasError = useAppSelector(hasErrorSelector);
  const products = useAppSelector(productsSelector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const retryHandler = useCallback(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className='wrapper'>
      <PageHeader
        title='Сделано в Альфе'
        description='Хотим каждую из этих вещей! Себе, родным и друзьям'
      />
      {hasError &&
        <Retry retryHandler={retryHandler} />
      }
      {isLoading &&
        <Loader />
      }
      {!hasError && !isLoading &&
        <ProductList products={products} />
      }
    </div>
  );
};