import React from 'react';
import s from './footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import IconOfSocial from "./IconOfSocial";

const Footer = () => {

    const instagram = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png';
    const linkedIn = 'https://image.flaticon.com/icons/png/512/174/174857.png'
    const twitter = 'https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png'
    const facebook = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'

    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Шпак Дмитрий</h2>
                <div className={s.socialBlock}>
                    <IconOfSocial icon={instagram}/>
                    <IconOfSocial icon={linkedIn}/>
                    <IconOfSocial icon={facebook}/>
                    <IconOfSocial icon={twitter}/>
                </div>
                <h2 className={s.secondTitle}>2021 Все права защищены</h2>
            </div>

        </div>
    );
};

export default Footer;