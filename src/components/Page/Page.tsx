import { Cart } from 'components/Cart/Cart';
import { Order } from 'components/Order/Order';
import React, { FC } from 'react';
import { Outlet } from 'react-router';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import cls from './page.module.css';

export const Page: FC = () => {
  return (
    <div className={cls.page}>
      <Header />
      <Cart />
      <Order />
      <Outlet />
      <Footer />
    </div>
  );
};