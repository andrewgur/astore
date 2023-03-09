import { ModalResponsive } from '@alfalab/core-components-modal';
import { Typography } from '@alfalab/core-components/typography';
import { useAppDispatch, useAppSelector } from 'store';
import { orderActions, orderConfirmed } from 'store/order';

export const OrderConfirmed = () => {

  const dispatch = useAppDispatch();
  const open = useAppSelector(orderConfirmed);

  const handleClose = () => {
    dispatch(orderActions.setConfirmed(false));
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
        hasCloser={true}
        sticky={true}
        title={'Ваш заказ'}
        align='center'
        onBack={handleClose}
      />
      <ModalResponsive.Content>
        <div className="wrapper">
          <Typography.Title tag='h3'>
            Спасибо.<br />
            Заказ оформлен. Наши менеджеры свяжутся с вами
          </Typography.Title>
        </div>
      </ModalResponsive.Content>
    </ModalResponsive>
  );
};