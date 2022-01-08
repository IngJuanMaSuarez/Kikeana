import React from 'react';

import post_5 from '../media/post_5.png'

const Galeria = () => {
    return (
        <div>
            <main>
                <section className='grid-container blogpost-img-container'>
                    <img src= { post_5 } alt="" />
                </section>
                <section className='blogpost-main-container'>
                    <div className='grid-container'>
                        <h3>Artículo</h3>
                        <article>
                            <h1>Galería</h1>
                            <p>
                                A continuación verán algunas de las imágenes de los amigurumis personalizados que se han entregado como regalos a domicilio para todas las edades y toda ocasión.
                            </p>
                            <p>
                                Haz tu pedido o contáctanos por WhatsApp o por nuestras redes sociales.
                            </p>
                            <h2>Estamos en construcción...</h2>
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

export { Galeria };