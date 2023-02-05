import React, { FC } from 'react';
import cls from './footer.module.css';

export const Footer:FC = () => {
  return (
    <footer className={cls.footer}>
      <div className="wrapper">
        © ООО «Альфа Фьюче Пипл», 2023
      </div>
    </footer>
  );
};