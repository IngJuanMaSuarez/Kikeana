import React from 'react';

import { Header } from '../components/Header';
import { Outlet } from 'react-router';

const IndexLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{ children }</main>
            <Outlet />
        </div>
    );
};

export { IndexLayout };