import React from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router';

const BlogsLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{ children }</main>
            <Outlet />
            <Footer />
        </div>
    );
};

export { BlogsLayout };