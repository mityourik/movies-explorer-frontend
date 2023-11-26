import React from 'react';
import PropTypes from 'prop-types'; 
import './AboutProjectHeader.css';

function AboutProjectHeader ({ title}) {
    return(
        <h2 className='about-project__title'>{title}</h2>
    );
}

AboutProjectHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default AboutProjectHeader;