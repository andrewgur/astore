import { FC } from 'react';
import { Typography } from '@alfalab/core-components/typography';
import { Button } from '@alfalab/core-components/button';
import { useFormik } from 'formik';
import { SelectResponsive } from '@alfalab/core-components/select/responsive';
import cls from './product.info.module.css';
import { OptionShape } from '@alfalab/core-components/select/typings';

type ProductInfoProps = {
  title: string;
  price: number;
  description: string;
  stickerNumbers?: OptionShape[];
  models?: OptionShape[];
  colors?: OptionShape[];
  sizes?: OptionShape[];
};

type SelectListItemType = {
  name: 'colors' | 'stickerNumbers' | 'models' | 'colors' | 'sizes';
  label: string;
  options: OptionShape[] | undefined;
};

type initialValuesType = {
  stickerNumbers?: OptionShape;
  models?: OptionShape;
  colors?: OptionShape;
  sizes?: OptionShape;
};

export const ProductInfo: FC<ProductInfoProps> = ({ title, price, description, stickerNumbers, models, colors, sizes }) => {

  const selectList: SelectListItemType[] = [
    {
      name: 'colors',
      label: 'цвет',
      options: colors
    },
    {
      name: 'stickerNumbers',
      label: 'номер стикера',
      options: stickerNumbers
    },
    {
      name: 'models',
      label: 'модель',
      options: models
    },
    {
      name: 'sizes',
      label: 'размер',
      options: sizes
    },
  ];

  const initialValues = selectList.reduce((acc: initialValuesType, item: SelectListItemType) => {
    if (item.options?.length) {
      acc[item.name] = item.options[0];
    }
    return acc;
  }, {});

  const formik = useFormik({
    initialValues,
    onSubmit: (form) => {
      console.log(form);
    }
  });

  return (
    <div className={cls.productInfo}>
      <Typography.Title className={cls.productInfo__title} tag='h1'>{title}</Typography.Title>
      <div className={cls.productInfo__price}>{price} ₽</div>
      <form className={cls.productInfo__form} onSubmit={formik.handleSubmit}>
        {selectList.map(item => {
          if (item.options?.length) {
            return (
              <SelectResponsive
                dataTestId={item.name}
                key={item.name}
                options={item.options}
                block={true}
                name={item.name}
                label={item.label}
                labelView='outer'
                optionsSize='s'
                onChange={(option) => formik.setFieldValue(item.name, option.selected)}
                selected={formik.values[item.name]}
              />
            );
          }
        }
        )}
        <Button
          className={cls.productInfo__button}
          type='submit'
          view='primary'
        >
          В корзину
        </Button>
      </form>
      <Typography.Text className={cls.productInfo__description} tag='p'>{description}</Typography.Text>
    </div>
  );
};