import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MenuPopup.css';
import { NavLink } from 'react-router-dom';
import profileIconThemeWhite from '../../../images/menu-popup__profile-icon.svg';

function MenuPopup({ onClick }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        setTimeout(onClick, 200);
    };

    return (
        <div className={`menu-popup ${isOpen ? 'open' : 'close'}`}>
            <div className={`menu-popup__two-colunns ${isOpen ? 'open' : 'close'}`}>
                <nav className='menu-popup__two-columns menu-popup__two-columns_content_navigation'>
                    <ul className='menu-popup__list'>
                        <li className='menu-popup__item'>
                            <NavLink 
                                to='/' 
                                className={({ isActive }) => `menu-popup__link ${isActive ? 'active' : ''}`} 
                                onClick={onClick}
                            >
                                Главная
                            </NavLink>
                        </li>
                        <li className='menu-popup__item'>
                            <NavLink 
                                to='/movies' 
                                className={({ isActive }) => `menu-popup__link ${isActive ? 'active' : ''}`} 
                                onClick={onClick}
                            >
                                Фильмы
                            </NavLink>
                        </li>
                        <li className='menu-popup__item'>
                            <NavLink 
                                to='/saved-movies' 
                                className={({ isActive }) => `menu-popup__link ${isActive ? 'active' : ''}`} 
                                onClick={onClick}
                            >
                                Сохраненные фильмы
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='menu-popup__two-columns menu-popup__two-columns_content_profile'>
                    <button className='menu-popup__profile-button'>
                        <NavLink to='/profile' className='popup-menu__profile-link'>
                            <img className='popup-menu__profile-icon' src={profileIconThemeWhite} alt='Изображение кнопки аккаунта' />
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
