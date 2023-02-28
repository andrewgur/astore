import { FC } from 'react';
import { Typography } from '@alfalab/core-components/typography';
import { Button } from '@alfalab/core-components/button';
import { FormikValues, useFormik } from 'formik';
import { SelectResponsive } from '@alfalab/core-components/select/responsive';
import { OptionShape } from '@alfalab/core-components/select/typings';
import { ProductCartOptions } from 'types/Product';
import cls from './product.info.module.css';
import { TITLE_COLORS, TITLE_MODELS, TITLE_SIZES, TITLE_STICKER_NUMBERS } from 'constants/product';

type ProductInfoProps = {
  title: string;
  price: number;
  description: string;
  stickerNumbers?: OptionShape[];
  models?: OptionShape[];
  colors?: OptionShape[];
  sizes?: OptionShape[];
  handleAdd: (data: ProductCartOptions) => void;
};

type SelectListItemType = {
  name: 'colors' | 'stickerNumbers' | 'models' | 'colors' | 'sizes';
  label: string;
  options: OptionShape[] | undefined;
};

export type FormDataType = {
  stickerNumbers?: OptionShape;
  models?: OptionShape;
  colors?: OptionShape;
  sizes?: OptionShape;
};

export const ProductInfo: FC<ProductInfoProps> = ({ title, price, description, stickerNumbers, models, colors, sizes, handleAdd }) => {

  const selectList: SelectListItemType[] = [
    {
      name: 'colors',
      label: TITLE_COLORS,
      options: colors
    },
    {
      name: 'stickerNumbers',
      label: TITLE_STICKER_NUMBERS,
      options: stickerNumbers
    },
    {
      name: 'models',
      label: TITLE_MODELS,
      options: models
    },
    {
      name: 'sizes',
      label: TITLE_SIZES,
      options: sizes
    },
  ];

  const initialValues = selectList.reduce((acc: FormDataType, item: SelectListItemType) => {
    if (item.options?.length) {
      acc[item.name] = item.options[0];
    }
    return acc;
  }, {});

  const formik = useFormik({
    initialValues,
    onSubmit: (values: FormikValues) => {
      const data = Object.entries(values)
        .reduce((acc: ProductCartOptions, item) => {
          acc[item[0] as keyof ProductCartOptions] = item[1].content;
          return acc;
        }, {});
      handleAdd(data);
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
              <div key={item.name} className={cls.productInfo__field}>
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
              </div>
            );
          }
        }
        )}
        <Button
          className={cls.productInfo__button}
          type='submit'
          view='primary'
          dataTestId='product-add'
        >
          В корзину
        </Button>
      </form>
      <Typography.Text className={cls.productInfo__description} tag='p'>{description}</Typography.Text>
    </div>
  );
};