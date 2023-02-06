import React, { FC, useState } from 'react';
import { Circle } from '@alfalab/core-components/icon-view/circle';
import { BurgerMIcon } from '@alfalab/icons-glyph/BurgerMIcon';
import { CloseLWhiteIcon } from '@alfalab/icons-classic/CloseLWhiteIcon';
import { MailMIcon } from '@alfalab/icons-glyph/MailMIcon';
import { PhoneMIcon } from '@alfalab/icons-glyph/PhoneMIcon';
import { WhatsappMIcon } from '@alfalab/icons-logotype/WhatsappMIcon';
import { Drawer } from '@alfalab/core-components/drawer';
import cls from './menu.module.css'
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP } from '../../constants/contacts';
import { PAGE_ALFA, PAGE_CONTACTS, PAGE_CUSTOM, PAGE_POLICY } from '../../constants/pages';

export const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

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
          <ul className={cls.menu__list}>
            <li className={cls.menu__list_item}>
              <Link to={PAGE_ALFA} className={cls.menu__list_link}>Сделано в Альфе</Link>
            </li>
            <li className={cls.menu__list_item}>
              <Link to={PAGE_CUSTOM} className={cls.menu__list_link}>Свой дизайн</Link>
            </li>
            <li className={cls.menu__list_item}>
              <Link to={PAGE_CONTACTS} className={cls.menu__list_link}>Контакты</Link>
            </li>
          </ul>
          <div className={cls.menu__footer}>
            <Link to={PAGE_POLICY} className={cls.menu__footer_link}>
              <span className={cls.menu__footer_text}>Политика конфиденциальности</span> и обработки персональных данных
            </Link>
            <ul className={cls.menu__social}>
              <li className={cls.menu__social_item}>
                <a href={`mailto:${CONTACT_EMAIL}`} title="Написать письмо">
                  <Circle backgroundColor='#fff' size={32} className={cls.menu__social_circle}>
                    <MailMIcon color='#000' className={cls.menu__social_icon}/>
                  </Circle>
                </a>
              </li>
              <li className={cls.menu__social_item}>
                <a href={`tel:${CONTACT_PHONE}`} title="Позвонить">
                  <Circle backgroundColor='#fff' size={32}>
                    <PhoneMIcon color='#000' className={cls.menu__social_icon} />
                  </Circle>
                </a>
              </li>
              <li className={cls.menu__social_item}>
                <a href={CONTACT_WHATSAPP} target="_blank" rel="nofollow noopener noreferrer" title="Whatsapp">
                  <Circle backgroundColor='#fff' size={32}>
                    <WhatsappMIcon color='#000' className={cls.menu__social_icon} />
                  </Circle>
                </a>
              </li>
            </ul>
            </div>
          </div>
      </Drawer>
    </>
  )
};