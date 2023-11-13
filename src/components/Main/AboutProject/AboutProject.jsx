import React from 'react';
import './AboutProject.css';
import AboutProjectHeader from './AboutProjectHeader/AboutProjectHeader';

function AboutProject() {
    return(
        <section className='about-project'>
            <div className='about-project__container'>
                <AboutProjectHeader title='О проекте' />
                <div className='about-project__column_left'>
                    <h3 className='about-project__column_title'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__column_paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__column_right'>
                    <h3 className='about-project__column_title'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__column_paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
                <div className='about-project__timeline'>
                    <div className='about-project__timeline-item'>
                        <p className='about-project__timeline-frontend'>4 недели</p>
                        <p className='about-project__timeline-frontend_subt'>Front-end</p>
                        <div className='about-project__timeline-bar'>
                            <p className='about-project__timeline-backend'>1 неделя</p>
                            <p className='about-project__timeline-backend_subt'>Back-end</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;