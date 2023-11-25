import React from 'react';
import promoImage from '../../../images/promo__image.svg';
import './Promo.css';
import PropTypes from 'prop-types';

function Promo({ scrollToRef }) {

    const handleScrollToSection = () => {
        if (scrollToRef && scrollToRef.current) {
            scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <section className='promo'>
            <div className='promo__grid'>
                <h1 className='promo__title'>Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.</h1>
                <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button
                    className='promo__button'
                    onClick={handleScrollToSection}>
                        Узнать больше</button>
                <img className='promo__image' src={promoImage} alt='Изображение глобуса' />
            </div>
        </section>
    );
}

Promo.propTypes = {
    scrollToRef: PropTypes.shape({
        current: PropTypes.instanceOf(Element)
    })
};

export default Promo;