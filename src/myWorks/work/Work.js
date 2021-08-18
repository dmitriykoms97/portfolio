import React from 'react';
import s from './work.module.css'

const Work = (props) => {
    return (
        <div className={s.work}>
            <div className={s.icon}>{props.icon}</div>
            <button className={s.button}>Смотреть</button>
            <h3 className={s.title}>{props.title}</h3>
            <div className={s.shortDescription}>{props.description}</div>
        </div>
    );
};

export default Work;