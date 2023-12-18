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
                        <p
                            className='portfolio__link-button' aria-label='Кнопка-ссылка на проект'>
                                &#x2197;
                        </p>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <a
                        className='portfolio__link'
                        href='https://mityourik.github.io/mesto-react/'
                        target='_blank'
                        rel='noopener noreferrer'>
                            Адаптивный сайт
                        <p
                            className='portfolio__link-button'
                            aria-label='Кнопка-ссылка на проект'>
                                &#x2197;
                        </p>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <a className='portfolio__link'
                        href='https://mityourik.nomoredomainsrocks.ru'
                        target='_blank'
                        rel='noopener noreferrer'>
                            Одностраничное приложение
                        <p
                            className='portfolio__link-button'
                            aria-label='Кнопка-ссылка на проект'>
                                &#x2197;
                        </p>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;