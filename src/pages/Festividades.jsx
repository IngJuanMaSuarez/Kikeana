import React from 'react';

import post_3 from '../media/post_3.png';

const Festividades = () => {
    return (
        <div>
            <main>
                <section className='grid-container blogpost-img-container'>
                    <img src= { post_3 } alt="" />
                </section>
                <section className='blogpost-main-container'>
                    <div className='grid-container'>
                        <h3>Artículo</h3>
                        <article>
                            <h1>Festividades</h1>
                            <h2>Día Mundial del Crochet - 12 de septiembre</h2>
                            <p>
                                Una celebración relativamente reciente y nace en Estados Unidos. 12 de septiembre de 2007 cuando un artesano especializado en la talla de ganchos de madera, propone celebrar el  reconocimiento a este arte. 
                            <p>
                                ¿Quien se imaginó esto? !Que entretejiendo un hilo se podían hacer bellezas!
                            </p>
                            </p>
                            <h2>Día del Amigurumi - 25 de Abril</h2>
                            <p>
                                El 25 de abril de 2019 primer día Internacional del Amigurumi. Es usual ver amigurumis en las casas, oficinas y negocios, para recordarle a su dueño que debe respirar, sonreír y hacer una pausa en momentos de estrés o tristeza.
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

export { Festividades };