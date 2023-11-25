import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage () {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <section className='not-found-page'>
            <div className='not-found-page__container'>
                <h1 className='not-found-page__title'>404</h1>
                <p className='not-found-page__subtitle'>Страница не найдена</p>
            </div>
            <button className='not-found-page__button-go-back' onClick={handleGoBack}>Назад</button>
        </section>
    );
}

export default NotFoundPage;