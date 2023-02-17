import { FC } from 'react';
import { Typography } from '@alfalab/core-components/typography';
import { Button } from '@alfalab/core-components/button';
import { Field, Form, Formik } from 'formik';
import cls from './product.info.module.css';

type ProductInfoProps = {
  title: string;
  price: number;
  description: string;
  stickerNumbers?: number[];
  models?: string[];
  colors?: string[];
  sizes?: string[];
};

type SelectBlockType = {
  label: string;
  values: string[] | number[];
  name: string;
};

export const ProductInfo: FC<ProductInfoProps> = ({ title, price, description, stickerNumbers, models, colors, sizes }) => {

  const SelectBlock: FC<SelectBlockType> = ({ label, values, name }) => {
    return (
      <div className={cls.productInfo__selectBlock}>
        <label className={cls.productInfo__label}>{label}</label>
        <Field as="select" name={name} aria-label={name} className={cls.productInfo__select}>
          {values.map((value) => <option key={value} value={value}>{value}</option>)}
        </Field>
      </div>
    );
  };

  return (
    <div className={cls.productInfo}>
      <Typography.Title className={cls.productInfo__title} tag='h1'>{title}</Typography.Title>
      <div className={cls.productInfo__price}>{price} ₽</div>
      <Formik
        initialValues={{}}
        onSubmit={() => { }}
      >
        <Form>
          {colors && colors.length &&
            <SelectBlock
              label='цвет'
              name='colors'
              values={colors}
            />
          }
          {sizes && sizes.length &&
            <SelectBlock
              label='размер'
              name='sizes'
              values={sizes}
            />
          }
          {stickerNumbers && stickerNumbers.length &&
            <SelectBlock
              label='номер стикера'
              name='stickerNumbers'
              values={stickerNumbers}
            />
          }
          {models && models.length &&
            <SelectBlock
              label='модель'
              name='models'
              values={models}
            />
          }
          <Button className={cls.productInfo__button} type='submit' view='primary'>В корзину</Button>
        </Form>
      </Formik>
      <Typography.Text className={cls.productInfo__description} tag='p'>{description}</Typography.Text>
    </div>
  );
};