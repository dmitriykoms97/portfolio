import React from 'react';
import s from './Skill.module.css'

const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div><img src={props.icon} className={s.icon}/></div>
            <h3 className={s.title}>{props.title}</h3>
            <div className={s.description}>{props.description}</div>
        </div>
    );
};

export default Skill;