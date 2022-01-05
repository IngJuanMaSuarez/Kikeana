import React from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';
import { Outlet } from 'react-router';

const BlogLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{ children }</main>
            <Outlet />
            <Contact />
            <Footer />
        </div>
    );
};

export { BlogLayout };