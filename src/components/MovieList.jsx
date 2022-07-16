import React from 'react';
import { useState, useEffect } from "react";
import { callService } from '../data-service/data-service';
import { getProducts } from '../data-service/product-service';
import { ListNavigation } from './ListNavigation';
import { List } from './List/List';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

export function MovieList() {
    //const movieList = useSelector( state => state.movies );
    //const catId = useSelector( state => state.catId );
    const productList = useSelector( state => state.products );

    const [offSet, setOffSet] = useState(0);
    let params = useParams();

    const dispatch = useDispatch();

    //e chamado uma vez quando o component ja esta "mounted"
    useEffect(  () => {
        ( async function() {
            const movies = await callService("https://kitsu.io/api/edge/anime?filter[categories]=" + params.catId + "&page[limit]=20&page[offset]=" + offSet);
            const products = await getProducts("http://localhost:8081/api/products");

            console.log("products", products)
            console.log("movies", movies)
/*
            if(catId !== params.catId)
            {
                setOffSet(0);
            }
*/
            dispatch({
                type: "PRODUCT_LIST_PAGE",
                //movie_list: movies,
                //catId: params.catId
                product_list: products
              });
        })();
   // }, [offSet, catId, params.catId, dispatch])
    }, [dispatch])
/*
    function handleNextPageChange() {
        setOffSet(offSet + 20);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }

    function handlePrevPageChange() {
        setOffSet(offSet - 20);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }

    function goTo(evt) {
        setOffSet(evt.target.value);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }
*/
    return (
        <div id="movie-list-component" className="movie-list-container">
            <div className="movie-list-content">
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