import React from 'react';
import promoImage from '../../../images/promo__image.svg';
import './Promo.css';

function Promo() {
    return(
        <section className='promo'>
            <div className='promo__grid'>
                <h1 className='promo__title'>Учебный проект студента факультета Веб&nbsp;&ndash;&nbsp;разработки.&nbsp;</h1>
                <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button className='promo__button'>Узнать больше</button>
                <img className='promo__image' src={promoImage} alt='Изображение глобуса' />
            </div>
        </section>
    );
}

export default Promo;