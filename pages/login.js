import React from 'react';
import Login from '../components/auth/Login';
import Head from 'next/head';

const LoginPage = () => {
    return (
        <>
        <Head><title>Hotel Las Palm | Login</title></Head>
            <Login />
        </>
    )
}

export default LoginPage
