import React, { FC } from 'react';
import { Typography } from '@alfalab/core-components/typography';
import cn from 'classnames';
import cls from './../group.module.css';
import clsPage from './../../Page/page.module.css';
import { ProductList } from './../../ProductList/ProductList';
import { GroupType } from '../../../types/Group';

export const GroupItem: FC<GroupType> = ({title, description, products }) => {
  return (
    <div className={cls.group} data-testid='GroupItem'>
      <Typography.Title tag='h2' className={cn(cls.group__title, clsPage.page__header)}>{ title }</Typography.Title>
      <Typography.Text className={cn(clsPage.page__text, cls.group__text)}>{description}</Typography.Text>
      <ProductList products={products} />
    </div>
  );
};