import React from 'react';
import s from './myWorks.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Work from "./work/Work";

const MyWorks = () => {

    const description = 'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.';

    return (
        <div className={s.myWorksBlock}>
            <div className={`${styleContainer.container} ${s.myWorksContainer}`}>
                <h2 className={s.title}>My Works</h2>
                <div className={s.works}>
                    <Work title={'Social Network'} description={description}/>
                    <Work title={'ToDo List'} description={description}/>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;