import { FC } from 'react';
import { useAppDispatch } from 'store';
import { cartActions } from 'store/cart';
import { ProductCartType } from 'types/Product';
import { CartItem } from './CartItem/CartItem';
import cls from './cartlist.module.css';

type CartListProps = {
  products: ProductCartType[];
};

export const CartList: FC<CartListProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  const onCountChange = (product: ProductCartType) => {
    dispatch(cartActions.update(product));
  };
  const onRemove = (product: ProductCartType) => {
    dispatch(cartActions.remove(product));
  };

  return (
    <div className={cls.cart__list}>
      {products.map((product, index) =>
        <CartItem
          key={`${product.id}/${index}`}
          onCountChange={onCountChange}
          product={product}
          onRemove={onRemove}
        />
      )}
    </div>
  );
};