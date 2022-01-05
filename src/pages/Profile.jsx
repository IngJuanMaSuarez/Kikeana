import React from 'react';

import profile from '../media/profile-pic.jpg';

const Profile = () => {
    return (
        <div>
            <main className='blogs-main'>
                <section className='grid-container blogs-news-container'>
                    <div className='blogs-main-new'>
                        <h3>Sobre Nosotros</h3>
                        <div className='blogs-news-img-container'>
                            <img src= { profile } alt = ''/>
                        </div>
                        <div className='blogs-news-info-container'>
                            <h2>Somos Kikeana!</h2>
                            <p>Chachara...</p>
                            <a href="Blog" className='blogs-button'>Leer más</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export { Profile };