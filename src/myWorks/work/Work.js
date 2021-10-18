import React from 'react';
import s from './work.module.css'

const Work = (props) => {
    return (
        <div className={s.work}>
            <div className={s.image} style={props.style}>
                <a href='#' className={s.button}>Open</a>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <div className={s.shortDescription}>{props.description}</div>
        </div>
    );
};

export default Work;