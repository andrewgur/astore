import { Typography } from '@alfalab/core-components/typography';
import React, { FC, ReactNode } from 'react';
import cls from './page.module.css';

type PageHeaderProps = {
  title: string;
  description?: string | ReactNode;
};

export const PageHeader: FC<PageHeaderProps> = ({title, description}) => {
  return (
    <div className={cls.page__header_container}>
      <Typography.Title tag='h1' className={cls.page__header}>{title}</Typography.Title>
      {description &&
        <Typography.Text className={cls.page__text}>{description}</Typography.Text>
      }
    </div>
  );
 };