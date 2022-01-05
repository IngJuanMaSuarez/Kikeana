import React from 'react';

import main_news_img from '../media/main_news_img.png';

import post1 from '../media/post_1.png';
import post2 from '../media/post_2.png';
import post3 from '../media/post_3.png';
import post4 from '../media/post_4.png';
import post5 from '../media/post_5.png';

const Blogs = () => {
    return (
        <div>
            <main className='blogs-main'>
                <section className='grid-container blogs-news-container'>
                    <div className='blogs-main-new'>
                        <h3>Blog Recomendado</h3>
                        <div className='blogs-news-img-container'>
                            <img src= { main_news_img } alt = ''/>
                        </div>
                        <div className='blogs-news-info-container'>
                            <h2>Qué es Amigurumi (編み包み)</h2>
                            <p>¿Conoces su origen, las creencias que los rodean y los usos que se les ha dado? Conoce más sobre los también llamados «peluches tejidos» que están volviéndose un fenómeno mundial.</p>
                            <a href="Blog" className='blogs-button'>Leer más</a>
                        </div>
                    </div>
                </section>
                <section className='blogs-posts-container'>
                    <div className='grid-container'>
                        <h3>Otros Blogs</h3>
                        <article className='post-container'>
                            <img src={ post1 } alt="" />
                            <p>Materiales Usados</p>
                            <p>Los amigurumis se tejen usando lana o hilo de algodón. Estos materiales varían en grosor, color, textura y en composición...</p>
                            <a href="Blog" className='blogs-button'>Leer más</a>
                        </article>
                        <article className='post-container'>
                            <img src={ post2 } alt="" />
                            <p>¿Cómo baño mi Amigurumi?</p>
                            <p>Procura siempre lavarlo a mano usando agua fría o tibia, y jabón de barra o jabón de baño neutro. Frótalo suavemente. Si lavas en lavadora...</p>
                            <a href="Blog" className='blogs-button'>Leer más</a>
                        </article>
                        <article className='post-container'>
                            <img src={ post3 } alt="" />
                            <p>Festividades</p>
                            <p>Una celebración relativamente reciente y nace en Estados Unidos. 12 de septiembre de 2007 cuando un artesano especializado...</p>
                            <a href="Blog" className='blogs-button'>Leer más</a>
                        </article>
                        <article className='post-container'>
                            <img src={ post4 } alt="" />
                            <p>Primer Instagram Live</p>
                            <p>El 15 de Noviembre a las 2 p.m. -hora de Colombia- hemos realizado nuestro primer Instagram Live para hacer el sorteo de un amigurumi totalmente gratis...</p>
                            <a href="Blog" className='blogs-button'>Leer más</a>
                        </article>
                        <article className='post-container'>
                            <img src={ post5 } alt="" />
                            <p>Galería</p>
                            <p>A continuación verán algunas de las imágenes de los amigurumis personalizados que se han entregado en diferentes ciudades de Colombia, para todas las...</p>
                            <a href="Blog" className='blogs-button'>Leer más</a>
                        </article>

                    </div>
                </section>
            </main>
        </div>
    );
};

export { Blogs };