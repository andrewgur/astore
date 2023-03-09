import React, { FC, ReactNode } from 'react';
import { ModalResponsive } from '@alfalab/core-components-modal';
import { Field, Form, Formik, FormikProps } from 'formik';
import { Grid } from '@alfalab/core-components/grid';
import { Input } from '@alfalab/core-components/input';
import { PhoneInput } from '@alfalab/core-components/phone-input';
import { RadioGroup } from '@alfalab/core-components/radio-group';
import { Radio } from '@alfalab/core-components/radio';
import { Checkbox } from '@alfalab/core-components/checkbox';
import { Textarea } from '@alfalab/core-components/textarea';
import cls from './order.module.css';
import { Button } from '@alfalab/core-components/button';
import { useAppDispatch, useAppSelector } from 'store';
import { productsSelector, totalPriceSelector } from 'store/cart';
import { CartList } from 'components/Cart/CartList/CartList';
import { orderConfirmed, orderDeliverySelector, orderLoading, orderOpenSelector, orderUserDataSelector } from 'store/order/selectors';
import { orderActions, sendOrder } from 'store/order/slice';
import { Amount } from '@alfalab/core-components/amount';
import { UserDataType } from 'types/Order';
import { DELIVERY_TYPE } from 'constants/order';
import * as Yup from 'yup';
import { OrderConfirmed } from './OrderConfirmed';

export const Order: FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productsSelector);
  const open = useAppSelector(orderOpenSelector);
  const totalPrice = useAppSelector(totalPriceSelector);
  const deliveryPrice = useAppSelector(orderDeliverySelector);
  const userData = useAppSelector(orderUserDataSelector);
  const isLoading = useAppSelector(orderLoading);
  const isConfirmed = useAppSelector(orderConfirmed);

  if (isConfirmed) {
    return (<OrderConfirmed />);
  }

  const handleClose = () => {
    dispatch(orderActions.setIsOpen(false));
  };

  const handleSubmit = () => {
    dispatch(sendOrder());
  };

  const handleChange = (formik: FormikProps<UserDataType>, e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    dispatch(orderActions.setUserData({ ...formik.values, [e.currentTarget.name]: e.currentTarget.value }));
  };

  //labelClassName & RadioGroup & Radio
  const Label: FC<{ children: ReactNode; className?: string; }> = ({ className = cls.order__form_label, children }) => {
    return (<span className={className}>{children}</span>);
  };

  return (
    <ModalResponsive
      size='fullscreen'
      open={open}
      fullscreen={true}
      hasCloser={true}
      onClose={handleClose}
    >
      <ModalResponsive.Header
        className={cls.order__header}
        hasCloser={true}
        hasBackButton={true}
        sticky={true}
        leftAddons={'Ваш заказ'}
        addonClassName={cls.order__title}
        align='center'
        onBack={handleClose}
      />
      <ModalResponsive.Content>
        <div className="wrapper">
          <Grid.Row>
            <Grid.Col width={{ desktop: 6, tablet: 12, mobile: 12 }} order={{ desktop: 'first', tablet: 'last', mobile: 'last' }}>
              <Formik
                initialValues={userData}
                onSubmit={handleSubmit}
                validateOnChange={false}
                validationSchema={
                  Yup.object().shape({
                    name: Yup
                      .string()
                      .min(5, "Минимальная длина 5 символов")
                      .required('поле ФИО обязательно для заполнения'),
                    email: Yup
                      .string()
                      .email('поле email должно соответствовать формату')
                      .required('поле email обязательно для заполнения'),
                    phone: Yup
                      .string()
                      .min(16, "поле телефон обязательно для заполнения")
                      .required('поле телефон обязательно для заполнения'),
                    address: Yup
                      .string()
                      .when('deliveryType', (value) => {
                        return +value !== 0
                          ? Yup.string().required('поле адрес обязательно для заполнения')
                          : Yup.string();
                      }),
                    policy: Yup
                      .boolean()
                      .required('для продолжения необходимо согласиться с политикой конфиденциальности'),
                  })
                }
              >
                {formik => (
                  <Form className={cls.order__form}>
                    <Field
                      as={Input}
                      className={cls.order__form_control}
                      fieldClassName={cls.order__form_field}
                      inputClassName={cls.order__form_input}
                      addonsClassName={cls.order__form_err}
                      block={true}
                      size='m'
                      labelView='outer'
                      label={<Label>ФИО</Label>}
                      placeholder='Фамилия Имя Отчество'
                      name='name'
                      type='text'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(formik, e)}
                      error={formik.errors.name}
                    />
                    <Field
                      as={Input}
                      className={cls.order__form_control}
                      fieldClassName={cls.order__form_field}
                      inputClassName={cls.order__form_input}
                      addonsClassName={cls.order__form_err}
                      block={true}
                      size='m'
                      labelView='outer'
                      label={<Label>e-mail</Label>}
                      placeholder='example@site.ru'
                      name='email'
                      type='email'
                      error={formik.errors.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(formik, e)}
                    />
                    <Field
                      as={PhoneInput}
                      className={cls.order__form_control}
                      fieldClassName={cls.order__form_field}
                      inputClassName={cls.order__form_input}
                      addonsClassName={cls.order__form_err}
                      block={true}
                      size='m'
                      labelView='outer'
                      label={<Label>Телефон</Label>}
                      placeholder='+7 000 000-00-00'
                      name='phone'
                      error={formik.errors.phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(formik, e)}
                    />
                    <Field
                      as={Input}
                      className={cls.order__form_control}
                      fieldClassName={cls.order__form_field}
                      inputClassName={cls.order__form_input}
                      addonsClassName={cls.order__form_err}
                      block={true}
                      size='m'
                      labelView='outer'
                      label={<Label>Адрес (если вы выбрали самовывоз — оставьте поле пустым)</Label>}
                      placeholder='Индекс, город, улица, дом, квартира'
                      name='address'
                      type='text'
                      error={formik.errors.address}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(formik, e)}
                    />
                    <Field
                      as={RadioGroup}
                      className={cls.order__form_group}
                      label={<Label>Доставка</Label>}
                      name='delivery'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(formik, e)}
                    >
                      <Field as={Radio} label={<Label className={cls.order__form_label_s}>Доставка по России — 350₽</Label>} value='350' />
                      <Field as={Radio} label={<Label className={cls.order__form_label_s}>Курьером по Москве — 300₽</Label>} value='300' />
                      <Field as={Radio} label={<Label className={cls.order__form_label_s}>Самовывоз (пр-т Андропова, 18 корп. 3)</Label>} value='0' />
                    </Field>
                    <Field
                      as={Textarea}
                      nativeScrollbar={true}
                      block={true}
                      label={<Label>Комментарий к заказу</Label>}
                      labelView='outer'
                      fieldClassName={cls.order__form_field}
                      textareaClassName={cls.order__form_textarea}
                      minRows={3}
                      name='comment'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(formik, e)}
                    />
                    <Field
                      as={Checkbox}
                      className={cls.order__form_checkbox}
                      block={true}
                      type='checkbox'
                      size='s'
                      name='policy'
                      id='policy'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(formik, e)}
                      label={
                        <Label className={cls.order__form_label_s}>
                          Согласен с политикой конфиденциальности и обработки персональных данных
                        </Label>}
                    />
                    <Field
                      as={RadioGroup}
                      className={cls.order__form_group}
                      label={<Label>Оплата</Label>}
                      error={false}
                      value={'Банковская карта'}
                      paymentType='paymentType'
                      id='paymentType'
                    >
                      <Field as={Radio} label={<Label className={cls.order__form_label_s}>Банковская карта</Label>} value='Банковская карта' />
                    </Field>
                    <Button
                      className={cls.order__form_button}
                      block={true}
                      loading={isLoading}
                      type='submit'
                    >
                      Отправить заказ
                    </Button>
                  </Form>
                )}
              </Formik>
            </Grid.Col>
            <Grid.Col width={{ desktop: 6, tablet: 12, mobile: 12 }} order={{ desktop: 'last', tablet: 'first', mobile: 'first' }}>
              <div className={cls.order__products}>
                <CartList products={products} />
                <div className={cls.order__total}>
                  <span className={cls.order__total_value}>Cумма: <Amount value={totalPrice} minority={0} currency='RUB' /></span>
                  {+deliveryPrice > 0 &&
                    <div className={cls.order__subtotal}>
                      <span className={cls.order__subtotal_value}>Cумма: <Amount value={totalPrice} minority={0} currency='RUB' /></span>
                      <span className={cls.order__subtotal_value}>{DELIVERY_TYPE[deliveryPrice]}: {deliveryPrice}₽</span>
                      <span className={cls.order__total_value}>Итого: <Amount value={totalPrice + +deliveryPrice} minority={0} currency='RUB' /></span>
                    </div>
                  }
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>
        </div>
      </ModalResponsive.Content>
    </ModalResponsive >
  );
};