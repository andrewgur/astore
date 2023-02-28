import React, { FC } from 'react';
import { Tooltip } from '@alfalab/core-components/tooltip';
import cn from 'classnames';
import cls from './carticon.module.css';

type CartIconPropsType = {
  total: number;
  count: number;
  isVisible: boolean;
  handleClick: () => void;
};

export const CartIcon: FC<CartIconPropsType> = ({ total, count, handleClick, isVisible }) => (
  <div
    data-testid='cartIcon'
    className={cn(cls.cart, { [cls.cart__active]: isVisible })}
    onClick={handleClick}
  >
    <Tooltip
      content={`= ${total} ₽`}
      position='left'
      view='hint'
      onOpenDelay={100}
      contentClassName={cls.cart__tooltip}
    >
      <div>
        <div className={cls.cart__inner}>
          <svg className={cls.cart__icon} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="none" stroke-width="2" stroke-miterlimit="10" d="M44 18h10v45H10V18h10z"></path><path fill="none" stroke-width="2" stroke-miterlimit="10" d="M22 24V11c0-5.523 4.477-10 10-10s10 4.477 10 10v13"></path></svg>
        </div>
        <div data-testid='cartIcon-badge' className={cls.cart__badge}>{count}</div>
      </div>
    </Tooltip>
  </div>
);