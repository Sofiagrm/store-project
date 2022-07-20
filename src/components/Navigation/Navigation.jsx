import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../../data-service/category-service';
import styles from './Navigation.module.scss';

export function Navigation () {
	const CategoriesList = useSelector( state => state.categories );

	const dispatch = useDispatch();

	useEffect(  () => {
        ( async function() {
            const categories = await getCategories();

            console.log("categories", categories)

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
					CategoriesList[0] ? 
						CategoriesList[0].data.map( (value, index) => (
							<Link className="list-item-image-link" to={"/ItemList/" + value.catref} key={index}>
								{value.designation}
							</Link>
						))
					: "wait"
				}
			</div>
		</nav>
	)
}