import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { cartActions, cartOpenSelector, productsSelector, totalCountSelector, totalPriceSelector } from 'store/cart';
import { CartIcon } from './CartIcon/CartIcon';
import { CartSideBar } from './CartSideBar/CartSideBar';

export const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const totalCount = useAppSelector(totalCountSelector);
  const totalPrice = useAppSelector(totalPriceSelector);
  const products = useAppSelector(productsSelector);
  const cartOpen = useAppSelector(cartOpenSelector);

  const handleClose = () => dispatch(cartActions.setCartOpen(false));
  const handleOpen = () => dispatch(cartActions.setCartOpen(true));

  return (
    <>
      <CartIcon
        total={totalPrice}
        count={totalCount}
        handleClick={handleOpen}
        isVisible={totalCount > 0}
      />
      <CartSideBar
        open={cartOpen}
        handleClose={handleClose}
        totalPrice={totalPrice}
        products={products}
      />
    </>
  );
};