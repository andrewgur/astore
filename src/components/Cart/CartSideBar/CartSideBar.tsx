import React, { FC } from 'react';
import { SidePanelResponsive } from '@alfalab/core-components/side-panel/responsive';
import { Button } from '@alfalab/core-components/button';
import { CartList } from '../CartList/CartList';
import { Amount } from '@alfalab/core-components/amount';
import cls from './cartSideBar.module.css';
import { ProductCartType } from 'types/Product';

type CartSideBarPropsType = {
  open: boolean;
  products: ProductCartType[];
  totalPrice: number;
  handleClose: () => void;
  handleNext: () => void;
};

export const CartSideBar: FC<CartSideBarPropsType> = ({ open, products, totalPrice, handleClose, handleNext }) => {
  return (
    <SidePanelResponsive
      open={open}
      onClose={handleClose}
      className={cls.cart__sidebar}
    >
      <SidePanelResponsive.Header
        sticky={true}
        hasCloser={true}
        title={'Ваш заказ'}
        className={cls.cart__header}
        contentClassName={cls.cart__header_content}
      />
      <SidePanelResponsive.Content>
        <CartList products={products} />
      </SidePanelResponsive.Content>
      <SidePanelResponsive.Footer sticky={true}>
        <div className={cls.cart__footer}>
          <div className={cls.cart__total}>Итого: <Amount value={totalPrice} minority={0} currency='RUB' /></div>
          <Button
            className={cls.cart__button}
            block={true}
            onClick={handleNext}
          >
            Дальше
          </Button>
        </div>
      </SidePanelResponsive.Footer>
    </SidePanelResponsive>
  );
};