import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';

const LoginRegister = () => {
    return (
        <div>
            <Header />
            <Outlet/>
        </div>
    );
};

export default LoginRegister;
