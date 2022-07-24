import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './ItemDetail.module.scss';

export function ItemDetail() {
    const item = useSelector( state => state.product );
    const basketProducts = useSelector( state => state.basket_lines );
    const basket = useSelector( state => state.basket );

    const navigate = useNavigate();

	const dispatch = useDispatch();

    const addToBasket = () => {

        if (!basket.length)
        {
            let basket_line = {
                product: item,
                amount: 1,
                prod_ref: item[0].prodref
            }

            basket.push(basket_line);
        }
        else {
            let new_line = true;
            
            basket.map((product, index) => {
                if(product.prod_ref === item[0].prodref) {
                    product.amount = product.amount + 1;
                    basket[index] = product;
                    new_line = false;
                }
            });

            if(new_line) {
                let basket_line = {
                    product: item,
                    amount: 1,
                    prod_ref: item[0].prodref
                }

                basket.push(basket_line);
            }
        }

        dispatch({
            type: "SET_BASKET",
            basket_products: basket
        });

        dispatch({
            type: "SET_BASKET_LINES",
            basket_lines: basket.length
        });
    }


    return (    
        <div id="ItemDetailContainer" className={styles.ItemDetailContainer}>
            
            <div className={styles.buttonContainer}>
                <button onClick={() => navigate(-1)}>Back to List</button>
            </div>
            
            <section className={styles.titlePanel}>
                    <div className={styles.titleContent}>
                        { item[0] ? <span>{item[0].designation}</span> : "" }
                    </div>
                </section>

            <div className={styles.productDetailContent}>
                
                <section className={styles.imagePanel}>
                    {
                        item[0] ? 
                            <div className={styles.imageContainer}>
                                <img src={item[0].imgurl} alt={item[0].designation}></img>
                            </div>
                            : ""
                    }
                </section>
                
                <section className={styles.infoPanel}>
                    
                    <div className={styles.infoContent}>
                        {
                            /* verifica se movie tem um valor truthy
                            se sim poe o que estiver em movie[0].id
                            senao, poe em espera
                            quando o valor de movie estiver definido pelo useSelector
                            isto ja vai funcionar com o movie[0], enquanto nao estiver
                            escreve espera */
                        }
                        { item[0] ? 
                                <div>
                                    <span>{item[0].prodref}</span>
                                    <span>{item[0].price}</span>
                                    <span>{item[0].description}</span>
                                </div>
                            : "espera" 
                        }
                        {
                            <div>
                                <button onClick={addToBasket}>Add to basket</button>
                            </div>

                        }
                    </div>
                </section>
            </div>
        </div>
    )
}