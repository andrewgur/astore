import React, { FC } from 'react';
import { Typography } from '@alfalab/core-components/typography';
import cls from './retry.module.css';
import { Button } from '@alfalab/core-components/button';

type RetryPropsType = {
  retryHandler: () => void;
};

export const Retry: FC<RetryPropsType> = ({ retryHandler }) => {
  return (
    <div className={cls.retry}>
      <Typography.TitleResponsive tag='h3' className={cls.retry__title}>Произошла ошибка</Typography.TitleResponsive>
      <Button data-testid='retry-button' onClick={retryHandler} view='primary' className={cls.retry__button}>Попробовать снова</Button>
    </div>
  );
};