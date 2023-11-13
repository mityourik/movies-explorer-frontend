import React from 'react';
import './Portfolio.css';

function Portfolio () {
    return(
        <div className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__projects'>
                <li className='portfolio__item'>
                    <a className='portfolio__link' href='https://github.com/mityourik/how-to-learn' target='_blank' rel='noreferrer'>Статичный сайт</a>
                    <p className='portfolio__link-arrow'>&#x2197;</p>
                </li>
                <li className='portfolio__item'>
                    <a className='portfolio__link' href='https://github.com/mityourik/mesto' target='_blank' rel='noreferrer'>Адаптивный сайт</a>
                    <p className='portfolio__link-arrow'>&#x2197;</p>
                </li>
                <li className='portfolio__item'>
                    <a className='portfolio__link' href='https://github.com/mityourik/react-mesto-api-full-gha' target='_blank' rel="noreferrer">Одностраничное приложение</a>
                    <p className='portfolio__link-arrow'>&#x2197;</p>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio;