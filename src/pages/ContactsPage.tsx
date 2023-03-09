import React, { FC } from 'react';
import { PageHeader } from 'components/Page/PageHeader';
import { Typography } from '@alfalab/core-components/typography';
import { Link } from 'react-router-dom';
import { PAGE_POLICY } from 'constants/pages';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

export const ContactsPage: FC = () => {

  const point = [55.694459, 37.661994];
  const mapConfig = {
    center: point,
    zoom: 14
  };

  return (
    <div className='wrapper'>
      <PageHeader
        title='Контакты'
      />
      <Typography.Text tag='p' style={{ margin: '50px 0' }}>
        +7 906 061 60 20<br />
        info@alfabankstore.ru<br />
        <br />
        г. Москва, пр-т Андропова, 18 корп. 3<br />
        <br />
        пн-чт:<br />
        10:00—19:00<br />
        пт:<br />
        10:00—17:30<br />
        <br />
        Принимаем к оплате карты Visa, Mastercard, МИР.<br />
        <br />
        <Link to={PAGE_POLICY}>Политика конфиденциальностии обработки персональных данных</Link>
      </Typography.Text>
      <div style={{ margin: '0 0 50px' }}>
        <YMaps>
          <Map defaultState={mapConfig} width={'80%'} height={'350px'}>
            <Placemark
              defaultGeometry={point}
              modules={['geoObject.addon.balloon']}
              properties={{
                balloonContentBody: 'Штаб-квартира на Технопарке'
              }}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};