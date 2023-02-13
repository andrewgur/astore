import { FC } from 'react';

export type MenuItemType = {
  link: string;
  title: string;
};
export type MenuContactsType = MenuItemType & {
  icon: FC;
  params?: React.HTMLProps<HTMLAnchorElement>;
};