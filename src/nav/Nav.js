import React from 'react';
import s from './nav.module.css'

const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="#" className={s.nav_link}>Main</a>
            <a href="#" className={s.nav_link}>Skills</a>
            <a href="#" className={s.nav_link}>Projects</a>
            <a href="#" className={s.nav_link}>Contacts</a>
        </div>
    );
};

export default Nav;