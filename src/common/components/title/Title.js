import React from 'react';
import s from './Title.module.css'

const Title = (props) => {
    return (
        <h2 className={s.title}>{props.text}</h2>
    );
};

export default Title;