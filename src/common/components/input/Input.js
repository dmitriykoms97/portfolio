import React from 'react';
import s from "../../../common/components/input/input.module.css";

const Input = (props) => {
    return (
        <div className={s.block}>
            <label>{props.firstName}</label>
            <input className={s.inputName}/>
        </div>
    );
};

export default Input;