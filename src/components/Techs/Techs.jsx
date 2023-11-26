import React from 'react';
import AboutProjectHeader from '../AboutProject/AboutProjectHeader/AboutProjectHeader';
import './Techs.css';

function Techs  () {
    return(
        <section className="techs">
            <div className='techs__container'>
                <AboutProjectHeader title='Технологии'/>
                <h1 className='techs__title'>7 технологий</h1>
                <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии,
                которые применили в дипломном проекте.</p>
                <ul className='techs__list'>
                    <li className='techs__item'>HTML</li>
                    <li className='techs__item'>CSS</li>
                    <li className='techs__item'>JS</li>
                    <li className='techs__item'>React</li>
                    <li className='techs__item'>Git</li>
                    <li className='techs__item'>Express.js</li>
                    <li className='techs__item'>mongoDB</li>
                </ul>
            </div>
        </section>
    );
}

export default Techs;