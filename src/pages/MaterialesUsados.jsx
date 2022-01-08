import React from 'react';

import post_1 from '../media/post_1.png';

const MaterialesUsados = () => {
    return (
        <div>
            <main>
                <section className='grid-container blogpost-img-container'>
                    <img src= { post_1 } alt="" />
                </section>
                <section className='blogpost-main-container'>
                    <div className='grid-container'>
                        <h3>Artículo</h3>
                        <article>
                            <h1>Materiales Usados</h1>
                            <p>
                                Por lo general, los amigurumis se tejen usando lana o hilo de algodón. Estos materiales varían en grosor, color, textura y en composición, que van desde lana a la utilización de fibras sintéticas.
                            </p>
                            <p>
                                Para tejerlos, se usan agujas de crochet. Lo ideal es que el tejido quede lo suficientemente ajustado para que el relleno no sea visible y lo bastante holgado como para que el amigurumi quede suave y mantenga su forma característica de peluche.
                            </p>
                            <p>
                                Para el relleno, se usa espuma, algodón o sintéticos como la que lleva cualquier peluche.
                            </p>
                            <p>
                                Para coser las partes que componen el amigurumi, se requiere aguja de lana e hilo del color de las partes a coser, aunque por lo general es la misma hebra final del tejido la que se utiliza para unir cada parte en su lugar.
                            </p>
                            <p>
                                Y lo más importante… creatividad, paciencia, mucho amor y pasión por cada una de las creaciones.
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

export { MaterialesUsados };
