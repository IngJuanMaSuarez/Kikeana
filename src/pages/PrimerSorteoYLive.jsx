import React from 'react';

import post_4 from '../media/post_4.png';

const PrimerSorteoYLive = () => {
    return (
        <div>
            <main>
                <section className='grid-container blogpost-img-container'>
                    <img src= { post_4 } alt="" />
                </section>
                <section className='blogpost-main-container'>
                    <div className='grid-container'>
                        <h3>Artículo</h3>
                        <article>
                            <h1>Primer Sorteo en Instagram Live</h1>
                            <p>
                                Así como lo prometimos en nuestras redes, el 15 de Noviembre de 2020 a las 2 p.m. -hora de Colombia- hemos realizado nuestro primer Instagram Live para hacer el sorteo de un amigurumi totalmente gratis entre los seguidores que cumplieron con los requisitos de haberse tomado una foto con nuestro filtro de realidad aumentada, etiquetarnos y compartir la imagen y el post del concurso en su historial; también debían escribirnos un comentario en el post del concurso diciéndonos cuál personaje deseaban.
                            </p>
                            <h2>Y la Ganadora es...</h2>
                            <p>
                                Gracias a nuestros seguidores por su apoyo, sus comentarios y me gusta. Felicitaciones a Martha Faride Romero Suárez, quien nos había indicado que deseaba un pulpo reversible, luego de acordar cómo desea personalizarlo nos pondremos en la tarea de tejerlo para hacerlo llegar hasta la puerta de su casa.
                            </p>
                        </article>
                        <button className='blogpost-button'>
                            <a href="Blogs">Regresar</a>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export { PrimerSorteoYLive };