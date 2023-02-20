import React, { FC, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchProduct, hasErrorSelector, isLoadingSelector, productSelector } from 'store/page-product';
import { Product } from '../components/Product/Product';
import { NotFound } from './NotFound';
import { Loader } from 'components/Loader/Loader';
import { Retry } from 'components/Retry/Retry';

export const ProductPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string; };

  const isLoading = useAppSelector(isLoadingSelector);
  const hasError = useAppSelector(hasErrorSelector);
  const product = useAppSelector(productSelector);

  useEffect(() => {
    dispatch(fetchProduct(+id));
  }, [dispatch, id]);

  const retryHandler = useCallback(() => {
    dispatch(fetchProduct(+id));
  }, [dispatch, id]);

  if (!isLoading && !product) {
    return (<NotFound />);
  }

  return (
    <div className='wrapper'>
      {isLoading &&
        <Loader />
      }
      {hasError &&
        <Retry retryHandler={retryHandler} />
      }
      {!isLoading && !hasError && product &&
        <Product {...product} />
      }
    </div>
  );
};