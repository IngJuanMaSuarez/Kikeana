import React from 'react';

import profile from '../media/profile-pic.jpg';

const Perfil = () => {
    return (
        <div>
            <main className='blogs-main'>
                <section className='profile-main-container'>
                    <div className='grid-container profile-container'>
                        <div>
                            <img src= { profile } alt="" />
                        </div>
                        <div>
                            <h2>Hola, ¡Somos Kikeana!</h2>
                            <p>Chachara...</p>
                        </div>
                    </div>
                </section>
                <section className='profile-main-proyects'>
                    <div className='grid-container'>
                        <h3>Proyectos</h3>
                        <div className='proyects-main-container'>
                            <article className='proyect-container'>
                                <h4>Título</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam doloremque ea laudantium voluptates, voluptate culpa debitis corrupti dignissimos recusandae explicabo deserunt excepturi dicta, suscipit sunt nihil. Corporis nisi minima quod.</p>
                            </article>
                            <article className='proyect-container'>
                                <h4>Título</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam doloremque ea laudantium voluptates, voluptate culpa debitis corrupti dignissimos recusandae explicabo deserunt excepturi dicta, suscipit sunt nihil. Corporis nisi minima quod.</p>
                            </article>
                            <article className='proyect-container'>
                                <h4>Título</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam doloremque ea laudantium voluptates, voluptate culpa debitis corrupti dignissimos recusandae explicabo deserunt excepturi dicta, suscipit sunt nihil. Corporis nisi minima quod.</p>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export { Perfil };