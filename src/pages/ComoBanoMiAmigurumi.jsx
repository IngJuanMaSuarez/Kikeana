import React from 'react';

import post_2 from '../media/post_2.png';

const ComoBanoMiAmigurumi = () => {
    return (
        <div>
            <main>
                <section className='grid-container blogpost-img-container'>
                    <img src= { post_2 } alt="" />
                </section>
                <section className='blogpost-main-container'>
                    <div className='grid-container'>
                        <h3>Artículo</h3>
                        <article>
                            <h1>¿Cómo Baño mi Amigurumi?</h1>
                            <p>
                                1. Procura siempre lavarlo a mano usando agua fría o tibia, y jabón de barra o jabón de baño neutro. Frótalo suavemente
                            </p>
                            <p>
                                2. Si lavas en lavadora, procura usar jabón para prendas delicadas y un ciclo suave. Nunca uses blanqueador. El agua caliente o jabón en polvo harán que tu amigurumi se decolore y pierda volúmen.
                            </p>
                            <p>
                                3. Se debe enjuagar procurando eliminar todo el jabón. No lo exprimas ni lo planches para que conserve su linda forma.
                            </p>
                            <p>
                                4. Sécalo suavemente con una toalla y déjao al aire libre sin que le dé directamente el sol. Tu amigurumi se sentirá mucho mejor si lo secas a la sombra naturalmente. No uses secadora o centrifugado.
                            </p>
                            <p>
                                Una vez seco tendrás tu amigurumi listo para volver a jugar con él. Tu amigurumi limpio y seco estará listo para acompañarte a donde quieras.
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

export { ComoBanoMiAmigurumi };