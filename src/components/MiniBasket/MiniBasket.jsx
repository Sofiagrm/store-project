import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './MiniBasket.module.scss';

export function MiniBasket () {
	const basketProducts = useSelector( state => state.basket_lines );

	return (
		<div className={styles.MiniBasket}>
			<Link className="list-item-image-link" to={"/Basket/"}>{basketProducts}</Link>
		</div>
	)
}