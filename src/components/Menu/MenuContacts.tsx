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
      {items.map((item, index) => {
        const Icon:FC<any> = item.icon;
        return(
          <li className={cls.menu__social_item} key={item.title}>
            <a href={item.link} title={item.title} {...item.params}>
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