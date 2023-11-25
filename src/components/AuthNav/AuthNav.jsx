import React from 'react';
import { Link } from 'react-router-dom';
import './AuthNav.css';
import PropTypes from 'prop-types';

function AuthNav ({ questionText, linkText, linkTo }) {
    return (
        <nav className='auth-nav__container'>
            <p
                className='auth-nav__paragraph'>
                {questionText}&nbsp;
            </p>
            <Link
                className='auth-nav__link'
                to={linkTo}
            >
                {linkText}
            </Link>
        </nav>
    );
}

AuthNav.propTypes = {
    questionText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
};

export default AuthNav;