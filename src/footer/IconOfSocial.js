import React from 'react';
import s from './iconSocial.module.css'

const IconOfSocial = (props) => {
    return (
        <div className={s.iconContainer}>
            <img src={props.icon} className={s.icon}/>
        </div>
    );
};

export default IconOfSocial;