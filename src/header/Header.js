import React from 'react';
import s from './header.module.css'
import Nav from "../nav/Nav";

const Header = () => {

    return (
        <div className={s.header} id={'myHeader'}>
            <div className={s.siteName}>my portfolio</div>
            <Nav />
        </div>
    );
};

export default Header;