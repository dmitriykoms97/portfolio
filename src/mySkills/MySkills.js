import React from 'react';
import s from './mySkills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import jsIcon from '../img/icons/javascript.png';
import HTMLIcon from '../img/icons/htmlCSS.png';
import react from '../img/icons/react.png';
import redux from '../img/icons/redux.png';
import restAPI from '../img/icons/restApi.png';
import typescript from '../img/icons/typescript.png';

const MySkills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JavaScript'}
                           description={'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.'}
                           icon={jsIcon}
                    />
                    <Skill title={'HTML & CSS'}
                           icon={HTMLIcon}
                           description={'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.'}/>
                    <Skill title={'React'}
                           icon={react}
                           description={'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.'}/>
                    <Skill title={'Redux'}
                           icon={redux}
                           description={'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.'}/>
                    <Skill title={'Rest API'}
                           icon={restAPI}
                           description={'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.'}/>
                    <Skill title={'TypeScript'}
                           icon={typescript}
                           description={'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.'}/>
                </div>
            </div>
        </div>
    );
};

export default MySkills;