import React from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Movies from '../Movies/Movies';

function Main () {
    return(
        <>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Movies />
        </>       
    );
}

export default Main;