import React from 'react';

import main_news_img from '../media/main_news_img.png';

const QueEsAmigurumi = () => {
    return (
        <div>
            <main>
                <section className='grid-container blogpost-img-container'>
                    <img src= { main_news_img } alt="" />
                </section>
                <section className='blogpost-main-container'>
                    <div className='grid-container'>
                        <h3>Artículo</h3>
                        <article>
                            <h1>¿Qué es Amigurumi? (編み包み)</h1>
                            <p>
                                Es uno de los tipos más antiguos de artesanía japonesa. Consiste en el tejido de figuras en tres dimensiones mediante técnicas de crochet, y forman parte de la idea de hacer sonreír al corazón a través de la cultura de lo “kawaii”.
                            </p>
                            <h2>¿Qué es kawaii (可愛い)?</h2>
                            <p>
                                Es un adjetivo japones que traduce bonito, tierno o adorable. Esta palabra, que no tiene una definición exacta, los jovenes la empezaron a utilizar para describir sentimientos de alegría e ilusión o cuando algo les parecía tierno, bonito, agradable o adorabe.
                            </p>
                            <p>
                                Cuando estos jóvenes se convirtieron en el motor de la economía japonesa todos los productos relacionados con lo kawaii empezaron a ganar protagonismo en la cultura y en todos los aspectos de la vida cotidiana traspasando fronteras y volviéndose un fenómeno mundial.
                            </p>
                            <h2>Creencias y Usos</h2>
                            <p>
                                En Japón el amigurumi es algo más que un hobby o pasatiempo, y se le da un significado mucho más profundo y significativo. No sólo se trata de una figura decorativa o un juguete, sino que los amigurumis buscan alimentar el espíritu de niño que todos llevamos dentro.
                            </p>
                            <p>
                                Se tiene la creencia que los amigurumis proporcionan protección y seguridad a su propietario. En algunos casos son usados como amuletos personales y también en casas, negocios y puestos de trabajo. Según la tradición japonesa cada amigurumi nos acompañará y será nuestro amiguito y confidente de por vida, dándonos protección y consuelo cuando estemos tristes o confundidos.
                            </p>
                            <p>
                                En Japón es usual verlos en las oficinas como adornos al lado de los computadores, representando un símbolo de apego, o para recordarle a su dueño que debe respirar, sonreír y hacer una pausa en momentos de estrés o tristeza.
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

export { QueEsAmigurumi };