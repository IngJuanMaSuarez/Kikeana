import React from 'react';

import main_news_img from '../media/main_news_img.png';
import like from '../media/006-like.png';
import newsletter from '../media/013-newsletter.png';

const Blog = () => {
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
                                Es uno de los tipos más antiguos de artesanía japonesa
                                Consiste en el tejido de figuras en tres dimensiones mediante técnicas de crochet, y forman parte de la idea de hacer sonreír al corazón a través de la cultura de lo “kawaii”.
                            </p>
                            <p>
                                ¿Qué es kawaii (可愛い)?
                                Es un adjetivo japones que traduce bonito, tierno o adorable
                                Esta palabra, que no tiene una definición exacta, los jovenes la empezaron a utilizar para describir sentimientos de alegría e ilusión o cuando algo les parecía tierno, bonito, agradable o adorabe.
                            </p>
                            <p>
                                Cuando estos jóvenes se convirtieron en el motor de la economía japonesa todos los productos relacionados con lo kawaii empezaron a ganar protagonismo en la cultura y en todos los aspectos de la vida cotidiana traspasando fronteras y volviéndose un fenómeno mundial.
                            </p>
                            <p>
                                Tan solo un segundo después de entrar en contacto con algo kawaii brota una sonrisa
                            </p>
                            <p>
                                Creencias y Usos
                                Buscan alimentar el espíritu de niño que todos llevamos dentro
                                En Japón el amigurumi es algo más que un hobby o pasatiempo, y se le da un significado mucho más profundo y significativo. No sólo se trata de una figura decorativa o un juguete, sino que los amigurumis buscan alimentar el espíritu de niño que todos llevamos dentro.
                            </p>
                            <p>
                                cada amigurumi nos acompañará y será nuestro amigo y confidente de por vida
                                Se tiene la creencia que los amigurumis proporcionan protección y seguridad a su propietario. En algunos casos son usados como amuletos personales y también en casas, negocios y puestos de trabajo. Según la tradición japonesa cada amigurumi nos acompañará y será nuestro amiguito y confidente de por vida, dándonos protección y consuelo cuando estemos tristes o confundidos.
                            </p>
                            <p>
                                Es usual verlos en las casas, oficinas y negocios
                                En Japón es usual verlos en las oficinas como adornos al lado de los computadores, representando un símbolo de apego, o para recordarle a su dueño que debe respirar, sonreír y hacer una pausa en momentos de estrés o tristeza.
                            </p>
                            <p>
                                Respirar, sonreír y relajarnos 😉
                            </p>
                        </article>
                    </div>
                </section>
                <section className='contact-main-container'>
                    <div>
                        <img src= { newsletter } alt="" />
                        <div className='contact-left'>
                            <a href="">Contacto</a>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, alias.</p>
                        </div>
                    </div>
                    <div>
                        <img src= { like } alt="" />
                        <div className='contact-right'>
                            <a href="">Escribe</a>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, dolorem.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export { Blog };