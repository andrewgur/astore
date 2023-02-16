import { FC } from 'react';

export type MenuItemType = {
  link: string;
  title: string;
};
export type MenuContactsType = MenuItemType & {
  icon: FC<any>;
  params?: React.HTMLProps<HTMLAnchorElement>;
};