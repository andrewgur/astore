import React, { FC } from 'react';
import { Spinner } from '@alfalab/core-components/spinner';
import cls from './loader.module.css';

export const Loader: FC = () => {
  return (
    <div className={cls.loader}>
      <Spinner size='m' />
    </div>
  );
};