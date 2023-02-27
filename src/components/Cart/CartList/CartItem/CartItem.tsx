import { FC, useCallback } from 'react';
import { Grid } from '@alfalab/core-components/grid';
import CounterInput from "react-counter-input";
import cls from './cartitem.module.css';
import { ProductCartOptions, ProductCartType } from 'types/Product';
import { Amount } from '@alfalab/core-components/amount';
import { TITLE_DESC } from 'constants/product';

type CartItemPropsType = {
  product: ProductCartType;
  onCountChange: (product: ProductCartType) => void;
  onRemove: (product: ProductCartType) => void;
};

export const CartItem: FC<CartItemPropsType> = ({ product, onCountChange, onRemove }) => {

  const countChangeHandle = (count: number) => {
    onCountChange({ ...product, count });
  };

  const onRemoveHandle = useCallback(() => onRemove(product), [product, onRemove]);

  return (
    <Grid.Row className={cls.cart__item} justify='left'>
      <Grid.Col width='2' align='middle' >
        <div
          className={cls.cart__item_img}
          style={{ backgroundImage: `url(${product.preview})` }}
          data-testid='CartIcon-image'
        />
      </Grid.Col>
      <Grid.Col width='4' align='middle'>
        <span className={cls.cart__item_title}>{product.title}</span>
        <div className={cls.cart__item_options}>
          {Object.entries(TITLE_DESC).map(item => {
            const value = product[item[0] as keyof ProductCartOptions];
            if (value) {
              return <div key={value}>{item[1]}: {value}</div>;
            }
          })}
        </div>
      </Grid.Col>
      <Grid.Col width='2' align='middle'>
        <CounterInput
          count={product.count}
          min={1}
          max={15}
          onCountChange={countChangeHandle}
          btnStyle={{
            padding: '2px 5px',
            fontSize: '10px',
            lineHeight: '12px',
            border: '1px solid #ccc',
            borderRadius: '50%',
          }}
          inputStyle={{
            width: '20px',
            height: '25px',
            fontSize: '16px'
          }}
        />
      </Grid.Col>
      <Grid.Col width='3' align='middle'>
        <div className={cls.cart__item_price}>
          <Amount value={product.count * product.price} minority={0} currency='RUB' />
        </div>
      </Grid.Col>
      <Grid.Col width='1' align='middle'>
        <span data-testid='CartItem-remove' className={cls.cart__item_remove} onClick={onRemoveHandle}>X</span>
      </Grid.Col>
    </Grid.Row>
  );
};