import React, { FC } from 'react';
import { Grid } from '@alfalab/core-components/grid';
import { Link } from 'react-router-dom';
import cls from './header.module.css'
import { Menu } from '../Menu/Menu';

export const Header:FC = () => {
  return (
    <header className={cls.header}>
      <Grid.Row justify='between'>
        <Grid.Col width='8'>
          <Link to="/" className={cls.header__logo}>A-Store</Link>         
          </Grid.Col>
          <Grid.Col width='4' align='middle'>
            <Menu/>
        </Grid.Col>
      </Grid.Row>
    </header>
  );
};