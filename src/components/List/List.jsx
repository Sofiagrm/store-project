import { useDispatch, useSelector } from 'react-redux'
import styles from './List.module.scss';
import { Link } from 'react-router-dom';

export function List() {
    //const movies = useSelector( state => state.movies );
    const products = useSelector( state => state.products );
    //const catId = useSelector( state => state.catId );
    const dispatch = useDispatch();

    //const setMovie = (evt) => {
        //let movie_index = evt.target.dataset.index;
/*
        dispatch({
            type: "SET_MOVIE",
            movie: movies[0].data[movie_index]
          });
          */
    //}

    const setProduct = (evt) => {

        let item_index = evt.target.dataset.index;
        
        dispatch({
            type: "SET_PRODUCT",
            product: products[0].data[item_index]
            });
    }

    return (
        <div id={styles.listComponent} className={styles.listComponentContainer}>
            {
            /*
            <div className="list-title">
                { catId } movies list
            </div>
            */}
            <section className={styles.itemsList}>
            {
               /*
                movies[0] ? movies[0].data.map( (value, index) => (
                    <div className="list-item" key={index}>
                        <Link className="list-item-image-link" to={"/MovieDetail/"} key={index}>
                            <img className="list-item-image"
                                src={value.attributes.posterImage.tiny} 
                                alt={value.attributes.canonicalTitle} 
                                data-index={index} 
                                onClick={setMovie}
                            />
                        </Link>
                        <div className="list-item-title"> 
                            {value.attributes.canonicalTitle}
                        </div>
                    </div>
                )) : "wait"
                */

                products[0] ? products[0].data.map( (value, index) => (
                    <div className={styles.listItem} key={index}>
                        <Link className="list-item-image-link" to={"/ItemDetail/"} key={index}>
                            <img className={styles.listItemImage}
                                src={value.imgurl}
                                alt={value.designation} 
                                data-index={index}
                                onClick={setProduct}
                            />
                        </Link>
                        
                        <div className={styles.listItemTitle}> 
                            <span>{value.designation}</span>
                            <span>{value.price}</span>
                        </div>
                    </div>
                )) : "wait"

            }
            </section>
        </div>
    )
}