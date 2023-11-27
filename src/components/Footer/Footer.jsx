import React from 'react';
import './Footer.css';

function Footer () {
    return(
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__container'>
                <div className='footer__column_content_year'>
                    <p className='footer__year'>&copy; 2023</p>
                </div>
                <ul className='footer__column_content_links'>
                    <li className='footer__item'><a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer'>Яндекс.Практикум</a></li>
                    <li className='footer__item'><a className='footer__link' href='https://github.com/mityourik'target='_blank' rel='noreferrer'>Github</a></li>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;