import React from 'react';

import like from '../media/006-like.png';
import newsletter from '../media/013-newsletter.png';

const Contact = () => {
    return (
        <div>
            <section className='contact-main-container'>
                <div>
                    <img src= { newsletter } alt="" />
                    <div className='contact-left'>
                        <a href="mailto:KikeanaArt@gmail.com" target="_blank">Contáctanos</a>
                        <p>Envíanos un mail. Recibimos comentarios, sugerencias o preguntas... ¡lo que quieras!</p>
                    </div>
                </div>
                <div>
                    <img src= { like } alt="" />
                    <div className='contact-right'>
                        <a href="https://instabio.cc/KikeanaArt" target="_blank">Síguenos</a>
                        <p>No olvides apoyarnos con un ❤️ y seguirnos en nuestras redes sociales.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export { Contact };