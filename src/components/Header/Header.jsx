import React from 'react';
import { Link } from 'react-router-dom';
import { MiniBasket } from '../MiniBasket/MiniBasket';
import styles from './Header.module.scss';

export function Header () {

  return (
    <div className={styles.Header}>
      <Link className={styles.logo} to={"/"}>LOGO</Link>
      <MiniBasket/>
    </div>
  )
}