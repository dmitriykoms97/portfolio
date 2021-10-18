import React from 'react';
import s from './myWorks.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Work from "./work/Work";
import socialNetwork from '../img/icons/socialNetwork.jfif'
import todolist from './work/todolist.jpg'
import Title from "../common/components/title/Title";

const MyWorks = () => {

    const description = 'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.';

    const social = {
        backgroundImage: `url(${socialNetwork})`
    }
    const todo = {
        backgroundImage: `url(${todolist})`
    }


    return (
        <div className={s.myWorksBlock}>
            <div className={`${styleContainer.container} ${s.myWorksContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.works}>
                    <Work
                        title={'Social Network'}
                        description={description}
                        style={social}
                    />
                    <Work title={'ToDo List'}
                          description={description}
                          style={todo}
                    />
                </div>
            </div>
        </div>
    );
};

export default MyWorks;