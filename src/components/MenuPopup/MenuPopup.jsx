import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MenuPopup.css';
import { NavLink } from 'react-router-dom';
import profileIconThemeWhite from '../../images/menu-popup__profile-icon.svg';

function MenuPopup({ onClick }) {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const clickedElement = event.target;

            const clickedOutsidePopup = !clickedElement.closest('.menu-popup__two-columns_opened');
            
            if (clickedOutsidePopup) {
                handleClose();
            }
        };

        const handleEscPress = (event) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        document.body.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleEscPress);

        return () => {
            document.body.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscPress);
        };
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        setTimeout(() => {
            onClick();
        }, 500);
    };

    return (
        <div className={`menu-popup ${isOpen ? 'menu-popup_opened' : ''}`}>
            <div className={`menu-popup__two-columns ${isOpen ? 'menu-popup__two-columns_opened' : ''}`}>
                <nav className='menu-popup__two-columns-content menu-popup__two-columns-content_navigation'>
                    <ul className='menu-popup__list'>
                        <li className='menu-popup__item'>
                            <NavLink 
                                to='/' 
                                className={({ isActive }) => `menu-popup__link ${isActive ? 'menu-popup__link_active' : ''}`} 
                                onClick={onClick}
                            >
                                Главная
                            </NavLink>
                        </li>
                        <li className='menu-popup__item'>
                            <NavLink 
                                to='/movies' 
                                className={({ isActive }) => `menu-popup__link ${isActive ? 'menu-popup__link_active' : ''}`} 
                                onClick={onClick}
                            >
                                Фильмы
                            </NavLink>
                        </li>
                        <li className='menu-popup__item'>
                            <NavLink 
                                to='/saved-movies' 
                                className={({ isActive }) => `menu-popup__link ${isActive ? 'menu-popup__link_active' : ''}`} 
                                onClick={onClick}
                            >
                                Сохраненные фильмы
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='menu-popup__two-columns-content menu-popup__two-columns-content_profile'>
                    <button className='menu-popup__profile-button'>
                        <NavLink to='/profile' className='menu-popup__profile-link'>
                            <img
                                className='menu-popup__profile-icon'
                                src={profileIconThemeWhite}
                                alt='Изображение кнопки аккаунта'
                            />
                        </NavLink>
                    </button>
                </div>
            </div>
            <button className='menu-popup__close-button' onClick={handleClose} />
        </div>
    );
}

MenuPopup.propTypes = {
    onClick: PropTypes.func
};

export default MenuPopup;
