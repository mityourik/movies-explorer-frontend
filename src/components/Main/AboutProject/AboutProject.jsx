import React from 'react';
import './AboutProject.css';
import AboutProjectHeader from './AboutProjectHeader/AboutProjectHeader';

function AboutProject() {
    return(
        <section className='about-project'>
            <div className='about-project__container'>
                <AboutProjectHeader title='О проекте' />
                <div className='about-project__column_left'>
                    <h2 className='about-project__column_title'>Дипломный проект включал 5 этапов</h2>
                    <p className='about-project__column_paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__column_right'>
                    <h2 className='about-project__column_title'>На выполнение диплома ушло 5 недель</h2>
                    <p className='about-project__column_paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
                <div className='about-project__timeline'>
                    <div className='about-project__timeline about-project__timeline_content_backend'>
                        <h3 className='timeline-backend__title'>1 неделя</h3>
                        <p className='timeline-backend__subtitle'>Back-end</p>
                    </div>
                    <div className='about-project__timeline about-project__timeline_content_frontend'>
                        <h3 className='timeline-frontend__title'>4 недели</h3>
                        <p className='timeline-frontend__subtitle'>Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;