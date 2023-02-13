import { MailMIcon } from '@alfalab/icons-glyph/MailMIcon';
import { PhoneMIcon } from '@alfalab/icons-glyph/PhoneMIcon';
import { WhatsappMIcon } from '@alfalab/icons-logotype/WhatsappMIcon';
import { MenuContactsType, MenuItemType } from '../types/Menu';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP } from './contacts';
import { PAGE_ALFA, PAGE_CONTACTS, PAGE_CUSTOM } from './pages';

export const MENU: MenuItemType[] = [
  {
    link: PAGE_ALFA,
    title: 'Сделано в Альфе'
  },
  {
    link: PAGE_CUSTOM,
    title: 'Свой дизайн'
  },
  {
    link: PAGE_CONTACTS,
    title: 'Контакты'
  },
];

export const MENU_CONTACTS: MenuContactsType[] = [
  {
    link: `mailto:${CONTACT_EMAIL}`,
    title: 'Написать письмо',
    icon: MailMIcon
  },
  {
    link: `tel:${CONTACT_PHONE}`,
    title: 'Позвонить',
    icon: PhoneMIcon,
  },
  {
    link: CONTACT_WHATSAPP,
    title: 'Whatsapp',
    icon: WhatsappMIcon,
    params: {
      target: '_blank',
      rel: 'nofollow noopener noreferrer'
    }
  },
];