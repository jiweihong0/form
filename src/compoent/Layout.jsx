import React from 'react';
import Header from './Header';
export default function Layout( { children, className }) {
    return (
        <>
            <Header />
            <div className={className}>
                {children}
            </div>
        </>
    )
}