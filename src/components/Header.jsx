import React from 'react';

import Logo_negro from '../media/Logo_negro.png';

const Header = () => {
    return (
        <div>
            <header>
                <section className = "header-icons-container">
                    <div className = "icons">
                        <a href = ""><span className = "flaticon-002-twitter"></span></a>
                        <a href = ""><span className = "flaticon-011-instagram"></span></a>
                        <a href = ""><span className = "flaticon-010-linkedin"></span></a>
                        <a href = ""><span className = "flaticon-008-youtube"></span></a>
                        <a href = ""><span className = "flaticon-001-facebook"></span></a>
                    </div>
                </section>
                <nav>
                    <section className = "nav-logo-container">
                        <a href = "/"><img src = { Logo_negro } alt = "Logo de mi blog" /></a>
                    </section>
                    <section className = "profile-link">
                        <a href = "perfil.html">Sobre mi</a>
                    </section>
                </nav>
            </header>
        </div>
    );
};

export { Header };