import React from 'react';
import s from './main.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span>Приве, всем!</span>
                    <h1>Меня зовут Дмитрий</h1>
                    <p>Front-End Developer</p>
                </div>
                <div className={s.photo}>
                    <img src="#" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Main;