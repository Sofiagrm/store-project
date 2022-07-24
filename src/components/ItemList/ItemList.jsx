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
            const products = await getProductsByCategory(params.catId);

            dispatch({
                type: "PRODUCT_LIST_PAGE",
                product_list: products
            });
        })();
    }, [dispatch, params.catId])

    return (
        <div id="movie-list-component" className={styles.ItemList}>
            <div className={styles.movieListContent}>
                {
                   productList[0] ? <List/> : "wait"
                }
            </div>
        </div>
    )
}