import React from 'react';
import './Portfolio.css';

function Portfolio () {
    return(
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__projects'>
                <li className='portfolio__item'>
                    <a className='portfolio__link'
                        href='https://mityourik.github.io/russian-travel/'
                        target='_blank' rel='noreferrer'>
                            Статичный сайт
                        <button
                            className='portfolio__link-button'>
                                &#x2197;
                        </button>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <a
                        className='portfolio__link'
                        href='https://mityourik.github.io/mesto-react/'
                        target='_blank'
                        rel='noreferrer'>
                            Адаптивный сайт
                        <button
                            className='portfolio__link-button'>
                                &#x2197;
                        </button>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <a className='portfolio__link' href='https://mityourik.nomoredomainsrocks.ru' target='_blank' rel="noreferrer">Одностраничное приложение
                        <button
                            className='portfolio__link-button'>
                                &#x2197;
                        </button>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;