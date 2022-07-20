import React from 'react';
import { useEffect } from "react";
import { List } from '../List/List';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import styles from './ItemList.module.scss';
import { getProductsByCategory } from '../../data-service/product-service';

export function ItemList() {
    const productList = useSelector( state => state.products );

    let params = useParams();

    const dispatch = useDispatch();

    useEffect(  () => {
        ( async function() {
            console.log();

            const products = await getProductsByCategory(params.catId);

            console.log("products", products)

            dispatch({
                type: "PRODUCT_LIST_PAGE",
                product_list: products
              });
        })();
    }, [dispatch])

    return (
        <div id="movie-list-component" className={styles.ItemList}>
            <div className={styles.movieListContent}>
                {
                   /* movieList[0] ? <List/> : "wait"*/
                   productList[0] ? <List/> : "wait"
                }
                {
                    /*
                    movieList[0] ? ( movieList[0].meta.count > 20 && 
                        <ListNavigation 
                            offSet={offSet} 
                            onPrevPageChange={handlePrevPageChange}
                            onNextPageChange={handleNextPageChange}
                            listLength={movieList[0].meta.count}
                            goTo={goTo}
                        /> ) : "wait"
                    */
                }
            </div>
        </div>
    )
}