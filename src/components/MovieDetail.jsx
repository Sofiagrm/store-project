import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function MovieDetail() {

    const movie = useSelector( state => state.movie );
    const navigate = useNavigate();

    return (    
        <div id="movie-detail-container" className="component-container">
            
            <button onClick={() => navigate(-1)}>go back</button>
            
            <div className="movie-detail-content">
                
                <section id="image-panel"></section>
                
                <section id="info-panel">
                    
                    <div id="info-content">
                    {/* verifica se movie tem um valor truthy
                        se sim poe o que estiver em movie[0].id
                        senao, poe em espera
                        quando o valor de movie estiver definido pelo useSelector
                        isto ja vai funcionar com o movie[0], enquanto nao estiver
                        escreve espera */}
                        { movie[0] ? movie[0].attributes.description : "espera" }
                    </div>
                    
                    {
                        movie[0] ? ( !!movie[0].attributes.youtubeVideoId ? 
                            <iframe 
                                width="560" 
                                height="315"
                                title={movie[0].attributes.canonicalTitle}
                                src={"https://www.youtube.com/embed/" + movie[0].attributes.youtubeVideoId + "?&autoplay=1"} 
                                frameBorder="0" 
                                allowFullScreen
                            >
                            </iframe>
                            : "")
                        : "wait"
                    }
                </section>
            </div>
        </div>
    )
}