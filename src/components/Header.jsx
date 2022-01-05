import React from 'react';

import Logo from '../media/Logo.png';

const Header = () => {
    return (
        <div>
            <header>
                <section className = "header-icons-container">
                    <div className = "icons">
                        <a href = "https://www.instagram.com/KikeanaArt/" target="_blank"><span className = "flaticon-011-instagram"></span></a>
                        <a href = "https://www.facebook.com/KikeanaArt/" target="_blank"><span className = "flaticon-001-facebook"></span></a>
                        <a href = "https://twitter.com/KikeanaArt" target="_blank"><span className = "flaticon-002-twitter"></span></a>
                        <a href = "https://co.pinterest.com/kikeanaart/" target="_blank"><span className = "flaticon-004-groupme"></span></a>
                        <a href = "https://www.tiktok.com/@kikeanaart" target="_blank"><span className = "flaticon-005-kik"></span></a>
                        <a href = "https://wa.me/message/UFD4QQZHUERLC1" target="_blank"><span className = "flaticon-003-whatsapp"></span></a>
                        <a href = "https://m.me/KikeanaArt" target="_blank"><span className = "flaticon-012-messenger"></span></a>
                    </div>
                </section>
                <nav>
                    <section className = "nav-logo-container">
                        <a href = "/kikeana"><img src = { Logo } alt = "Logo de mi blog" /></a>
                    </section>
                    <section className = "profile-link">
                        <a href = "Perfil" >Sobre Nosotros</a>
                    </section>
                </nav>
            </header>
        </div>
    );
};

export { Header };