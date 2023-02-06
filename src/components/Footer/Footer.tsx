import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import cls from './footer.module.css';

export const Footer: FC = () => {
  const { pathname } = useLocation();
  return (
    <footer className={cn(cls.footer, {[cls.footer__mainpage]: pathname === '/'})}>
      <div className="wrapper">
        <div className={cls.footer__content}>
          <div>
            © ООО «Альфа Фьюче Пипл», 2023
          </div>
          <div>
            <Link to='/policy' className={cls.footer__link}>Политика конфиденциальности и обработки персональных данных</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};