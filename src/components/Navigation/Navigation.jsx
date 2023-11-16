import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation () {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className='navigation__container'>
            <NavLink to='/movies' className={`navigation__nav-link ${isHomePage ? '' : 'navigation__nav-link_theme_white'}`} href='#'>Фильмы</NavLink>
            <NavLink to='/saved-movies' className={`navigation__nav-link ${isHomePage ? '' : 'navigation__nav-link_theme_white'}`} href='#'>Сохраненные фильмы</NavLink>
        </div>
    );
}

export default Navigation;