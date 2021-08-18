import React from 'react';
import s from './mySkills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const MySkills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`} >
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JavaScript & TypeScript'}
                           description={'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.'}/>
                    <Skill title={'HTML & CSS'}
                           description={'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.'}/>
                    <Skill title={'React & Redux'}
                           description={'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.'}/>
                </div>
            </div>
        </div>
    );
};

export default MySkills;