import React from 'react';
import AboutProjectHeader from '../AboutProject/AboutProjectHeader/AboutProjectHeader';
import gridImage from '../../../images/about-me__grid-image.jpeg';
import Portfolio from './Portfolio/Portfolio';
import './AboutMe.css';

function AboutMe () {
    return(
        <section className="about-me">
            <div className='about-me__container'>
                <AboutProjectHeader title='Студент' />
                <div className='about-me__grid-container'>
                    <h1 className='about-me__grid-title'>Дмитрий</h1>
                    <h3 className='about-me__grid-subtitle'>Успешный фронтенд-разработчик, 39 лет</h3>
                    <p className='abou-me__grid-paragraph'>Я успешно родился и живу. Еще и потом с успехом закончил факультет
                    филологии и строительства. Хочу просто выглядеть успешным и красивым. Больше целей и нет, в общем-то.
                    Спасибо, что дочитал:а.</p>
                    <a className='about-me__grid-link' href='https://github.com/mityourik'>Github</a>
                    <img className='about-me__grid-image' alt='Фото профиля' src={gridImage}></img>
                </div>
                <Portfolio />
            </div>
        </section>
    );
}

export default AboutMe;