import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import cls from './menu.module.css';
import { MenuItemType } from '../../types/Menu';

type MenuContactsProps = {
  pathname: string;
  items: MenuItemType[];
};

export const MenuItems: FC<MenuContactsProps> = ({pathname, items}) => {
  return (
    <ul className={cls.menu__list}>
      {items.map(item => (
        <li className={cls.menu__list_item} key={item.link}>
          <Link to={item.link} className={cn(cls.menu__list_link, { [cls.menu__list_link_active]: item.link === pathname })}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};