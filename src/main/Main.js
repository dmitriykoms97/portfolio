import React from 'react';
import s from './main.module.css'
import styleContainer from '../common/styles/Container.module.css'
import myPhoto from '../img/myPhoto.JPG';
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

const Main = () => {

    const particlesOpt = {
        "particles": {
            "number": {
                "value": 120,
                "density": {
                    "enable": true,
                    "value_area": 900
                }
            }
        }
    }

    return (
        <div className={s.mainBlock}>
            <Particles className={s.particles} params={particlesOpt} />
            <div className={styleContainer.container}>
                <div className={s.heroContent}>
                    <ReactTypingEffect text={['Hello', 'I`m']} className={s.introTitle}/>
                    <h1 className={s.title}>Dmitriy Shpak</h1>
                    <h3 className={s.subTitle}>Front-End Developer</h3>
                </div>
                <Tilt className="Tilt" options={{ max : 25 }} >
                    <div>
                        <img src={myPhoto} alt="" className={s.photo}/>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default Main;