import React from 'react';
import s from './contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import Input from "../common/components/input/Input";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={s.formBlock}>
                    <Input firstName={'First name:'}/>
                    <Input firstName={'Last name:'}/>
                    <Input firstName={'Email:'}/>
                    <button className={s.btnSend}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;