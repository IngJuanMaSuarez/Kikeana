import React from 'react';

const Index = () => {

    return (
        <div className = "home-main">
            <section>
                <div className='home-main-container'>
                    <p className = "home-main-text">
                        Conoce las novedades y noticias del Mundo Amigurumi
                    </p>
                </div>
                    <button className = "home-main-button" >
                        <a href = "Blogs">Entra ya!</a>
                    </button>
            </section>
        </div>
    );
};

export { Index };