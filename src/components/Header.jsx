import React from 'react';

import Logo from '../media/Logo.png';

const Header = () => {
    return (
        <div>
            <header>
                <section className = "header-icons-container">
                    <div className = "icons">
                        <a href = ""><span className = "flaticon-001-facebook"></span></a>
                        <a href = ""><span className = "flaticon-002-twitter"></span></a>
                        <a href = ""><span className = "flaticon-003-whatsapp"></span></a>
                        <a href = ""><span className = "flaticon-011-instagram"></span></a>
                        <a href = ""><span className = "flaticon-012-messenger"></span></a>
                    </div>
                </section>
                <nav>
                    <section className = "nav-logo-container">
                        <a href = "/"><img src = { Logo } alt = "Logo de mi blog" /></a>
                    </section>
                    <section className = "profile-link">
                        <a href = "Profile" >Sobre Nosotros</a>
                    </section>
                </nav>
            </header>
        </div>
    );
};

export { Header };