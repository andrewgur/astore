import React, { FC } from 'react';
import { Grid } from '@alfalab/core-components/grid';
import { BurgerMIcon } from '@alfalab/icons-glyph/BurgerMIcon';
import { Link } from 'react-router-dom';
import cls from './header.module.css'

export const Header:FC = () => {
  return (
    <header className={cls.header}>
      <Grid.Row justify='between'>
        <Grid.Col width='8'>
          <Link to="/" className={cls.header__logo}>A-Store</Link>         
          </Grid.Col>
          <Grid.Col width='4' align='middle'>
            <div className={cls.header__menu}>
              <BurgerMIcon width={30} height={30} className='asd'/>
              <span className={cls.header__menu_text}>меню</span>
            </div>
        </Grid.Col>
      </Grid.Row>
    </header>
  );
};