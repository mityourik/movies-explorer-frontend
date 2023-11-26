import React from 'react';
import './AboutProject.css';
import AboutProjectHeader from './AboutProjectHeader/AboutProjectHeader';

function AboutProject() {
    return (
        <section className='about-project'id="about-project">
            <div className='about-project__container'>
                <AboutProjectHeader title='О проекте' />
                <div className='about-project__column about-project__column_left'>
                    <h2 className='about-project__column-title'>Дипломный проект включал 5 этапов</h2>
                    <p className='about-project__column-paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__column about-project__column_right'>
                    <h2 className='about-project__column-title'>На выполнение диплома ушло 5 недель</h2>
                    <p className='about-project__column-paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
                <div className='about-project__timeline'>
                    <div className='about-project__timeline-item about-project__timeline-item_backend'>
                        <h3 className='about-project__timeline-item-title'>1 неделя</h3>
                        <p className='about-project__timeline-item-subtitle'>Back-end</p>
                    </div>
                    <div className='about-project__timeline-item about-project__timeline-item_frontend'>
                        <h3 className='about-project__timeline-item-title about-project__timeline-item-title_frontend'>4 недели</h3>
                        <p className='about-project__timeline-item-subtitle'>Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;