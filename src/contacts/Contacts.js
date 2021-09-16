import React from 'react';
import s from './contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.formBlock}>
                    <label>First name: </label>
                    <input className={s.inputName}/>
                    <label>Last name: </label>
                    <input className={s.inputLastName}/>
                    <label>Something else: </label>
                    <textarea className={s.textArea} />
                    <button className={s.btnSend}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;