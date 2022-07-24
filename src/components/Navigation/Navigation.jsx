import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../../data-service/category-service';
import styles from './Navigation.module.scss';

export function Navigation () {
	const CategoriesList = useSelector( state => state.categories );

	console.log();

	const dispatch = useDispatch();

	useEffect(  () => {
        ( async function() {
            const categories = await getCategories();

			dispatch({
                type: "SET_CATEGORIES",
                categories_list: categories
            });
        })();
    }, [dispatch])



	return (
		<nav className={styles.Navigation}>
			<div className={styles.navItemContainer}>
				{
					CategoriesList[0] ? CategoriesList[0].data.filter(value => value.stock > 0).map( (value) => (
						<div className="list-item-image-link" key={value.catref}>
							<Link 
								to={"/ItemList/" + value.catref}
							>
								{value.designation}
							</Link>
						</div>
					))	: "wait"
				}
			</div>
		</nav>
	)
}