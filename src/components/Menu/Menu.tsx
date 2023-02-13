import React, { FC, useState } from 'react';
import { BurgerMIcon } from '@alfalab/icons-glyph/BurgerMIcon';
import { CloseLWhiteIcon } from '@alfalab/icons-classic/CloseLWhiteIcon';
import { Drawer } from '@alfalab/core-components/drawer';
import cls from './menu.module.css';
import { Link, useLocation } from 'react-router-dom';
import { PAGE_POLICY } from '../../constants/pages';
import { MenuItems } from './MenuItems';
import { MENU, MENU_CONTACTS } from '../../constants/menu';
import { MenuContacts } from './MenuContacts';

export const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  const { pathname } = useLocation();

  return (
    <>
      <div className={cls.menu}>
        <div className={cls.menu__container} onClick={handleOpen}>
          <BurgerMIcon width={30} height={30}/>
          <span className={cls.menu__text}>меню</span>
        </div>
      </div>
      <Drawer open={isOpen} onClose={handleOpen} className={cls.menu__drawer}>
        <div className={cls.menu__wrapper}>
          <div onClick={handleOpen} className={cls.menu__close}>
            <CloseLWhiteIcon className={cls.menu__close_icon} />
          </div>
          <MenuItems pathname={pathname} items={MENU} />
          <div className={cls.menu__footer}>
            <Link to={PAGE_POLICY} className={cls.menu__footer_link}>
              <span className={cls.menu__footer_text}>Политика конфиденциальности</span> и обработки персональных данных
            </Link>
            <MenuContacts items={MENU_CONTACTS} />
          </div>
        </div>
      </Drawer>
    </>
  )
};