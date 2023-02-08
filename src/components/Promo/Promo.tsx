import { Grid } from '@alfalab/core-components/grid';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@alfalab/core-components/typography';
import cn from 'classnames';
import cls from './promo.module.css';
import { PAGE_ALFA, PAGE_CUSTOM } from '../../constants/pages';

export const Promo: FC = () => {
  return (
    <Grid.Row gutter={0} justify="left" className={cls.promo}>
        <Grid.Col width={{ mobile: 12, desktop: 6, tablet: 6}}>
        <Link to={PAGE_ALFA} className={cn(cls.promo__block, cls.promo__alfa)}>
          <Typography.TitleResponsive tag="h2" className={cls.promo__title}>
            Сделано в Альфе
          </Typography.TitleResponsive>
        </Link>
      </Grid.Col>
      <Grid.Col width={{ mobile: 12, desktop: 6, tablet: 6}}>
        <Link to={PAGE_CUSTOM} className={cn(cls.promo__block, cls.promo__custom)}>
          <Typography.TitleResponsive tag="h2" className={cls.promo__title}>
            Свой дизайн
          </Typography.TitleResponsive>
        </Link>
      </Grid.Col>
    </Grid.Row>
  )
};