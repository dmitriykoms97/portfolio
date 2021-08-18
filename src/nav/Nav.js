import React from 'react';
import s from './nav.module.css'

const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="#" className={s.nav_link}>Главная</a>
            <a href="#" className={s.nav_link}>Скиллы</a>
            <a href="#" className={s.nav_link}>Проекты</a>
            <a href="#" className={s.nav_link}>Контакты</a>
        </div>
    );
};

export default Nav;