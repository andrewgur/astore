import React, { FC } from 'react';
import { Outlet } from 'react-router';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import cls from './page.module.css'

export const Page:FC = () => {
  return (
    <div className={cls.page}>
      <Header />
        <Outlet />
      <Footer/>
    </div>
  )
};