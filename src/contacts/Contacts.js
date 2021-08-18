import React from 'react';
import s from './contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Контакты</h2>
                <div className={s.formBlock}>
                    <p>Введите имя: </p>
                    <input className={s.inputName}/>
                    <p>Введите фамилию: </p>
                    <input className={s.inputLastName}/>
                    <p>Что-то ещё: </p>
                    <textarea className={s.textArea} />
                    <button className={s.btnSend}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contacts;