import React, { FC } from 'react';
import { ProductItemType } from '../../../types/Product';
import { Link } from 'react-router-dom';
import cls from './productListItem.module.css';

export const ProductListItem:FC<ProductItemType> = ({ id, preview, title, price }) => {
  return (
    <div className={cls.prodictListItem}>
      <Link to={`${id}`} className={cls.prodictListItem__link}>
        <div data-testid='ProductListItemBg' className={cls.prodictListItem__image} style={{backgroundImage: `url(${preview})`}}></div>
        <div className={cls.prodictListItem__info}>
          <p className={cls.prodictListItem__title}>{title}</p>
          <span className={cls.prodictListItem__price}>
            <span className={cls.prodictListItem__price_value}>{price}</span>₽
          </span>
        </div>
      </Link>
    </div>
  );
};