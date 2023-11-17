import React from 'react';
import logoImage from '../../images/header__logo.svg';
import { NavLink } from 'react-router-dom';
import './Logo.css';

function Logo () {

    return (
        <NavLink to='/' className='logo__nav-link'><img className='logo' src={logoImage} alt='Логотип страницы' /></NavLink>
    );
}

export default Logo;