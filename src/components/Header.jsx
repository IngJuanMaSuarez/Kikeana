import React from 'react';

import Logo from '../media/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faPinterest, faTiktok, faWhatsapp, faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"

const Header = () => {
    return (
        <div>
            <header>
                <section className = "header-icons-container">
                    <div className = "icons">
                        <a href = "https://www.instagram.com/KikeanaArt/" target="_blank"><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
                        <a href = "https://www.facebook.com/KikeanaArt/" target="_blank"><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
                        <a href = "https://twitter.com/KikeanaArt" target="_blank"><FontAwesomeIcon icon={faTwitter} size='2x' /></a>
                        <a href = "https://co.pinterest.com/kikeanaart/" target="_blank"><FontAwesomeIcon icon={faPinterest} size='2x' /></a>
                        <a href = "https://www.tiktok.com/@kikeanaart" target="_blank"><FontAwesomeIcon icon={faTiktok} size='2x' /></a>
                        <a href = "https://wa.me/message/UFD4QQZHUERLC1" target="_blank"><FontAwesomeIcon icon={faWhatsapp} size='2x' /></a>
                        <a href = "https://m.me/KikeanaArt" target="_blank"><FontAwesomeIcon icon={faFacebookMessenger} size='2x' /></a>
                    </div>
                </section>
                <nav>
                    <section className = "nav-logo-container">
                        <a href = "/"><img src = { Logo } alt = "Logo de mi blog" /></a>
                    </section>
                    <section className='nav-profile-container'>
                        <button className = "profile-button">
                            <a href = "Perfil" >Sobre Nosotros</a>
                        </button>
                    </section>
                </nav>
            </header>
        </div>
    );
};

export { Header };