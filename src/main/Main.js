import React from 'react';
import s from './main.module.css'
import styleContainer from '../common/styles/Container.module.css'
import myPhoto from '../img/myPhoto.JPG';

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.heroContent}>
                    <h3 className={s.introTitle}>Hello, I`m</h3>
                    <h1 className={s.title}>Dmitriy Shpak</h1>
                    <h3 className={s.subTitle}>Front-End Developer</h3>
                </div>
                <div>
                    <img src={myPhoto} alt="" className={s.photo}/>
                </div>
            </div>
        </div>
    );
};

export default Main;