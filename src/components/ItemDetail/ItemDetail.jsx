import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './ItemDetail.module.scss';

export function ItemDetail() {

    const item = useSelector( state => state.product );
    const navigate = useNavigate();

    return (    
        <div id="movieDetailContainer" className="componentContainer">
            
            <button onClick={() => navigate(-1)}>go back</button>
            
            <div className="productDetailContent">
                
                <section id="imagePanel"></section>
                
                <section id="infoPanel">
                    
                    <div id="infoContent">
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
                                <div>
                                    <span>{item[0].designation}</span>
                                    <span>{item[0].price}</span>
                                    <span>{item[0].imgurl}</span>
                                </div>
                                <img src={item.imgurl} alt={item.designation}></img>
                            </div> 
                            : "espera" 
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}