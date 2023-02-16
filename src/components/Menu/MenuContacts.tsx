import { FC } from 'react';
import { Circle } from '@alfalab/core-components/icon-view/circle';
import cls from './menu.module.css';
import { MenuContactsType } from '../../types/Menu';

type MenuContactsProps = {
  items: MenuContactsType[]
};

export const MenuContacts: FC<MenuContactsProps> = ({ items }) => {
  return (
    <ul className={cls.menu__social}>
      {items.map(({ icon: Icon, title, params, link }) => {
        return(
          <li className={cls.menu__social_item} key={title}>
            <a href={link} title={title} {...params}>
              <Circle backgroundColor='#fff' size={32}>
                <Icon color='#000' className={cls.menu__social_icon} />
              </Circle>
            </a>
          </li>
        );
      })}
    </ul>
  )
};