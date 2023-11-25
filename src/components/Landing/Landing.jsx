import React, { useRef } from 'react';
import Header from '../Header/Header';
import Promo from '../Main/Promo/Promo';
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from '../Main/Techs/Techs';
import AboutMe from '../Main/AboutMe/AboutMe';
import Footer from '../Footer/Footer';

function Landing () {
    const aboutProjectRef = useRef(null);

    return (
        <>
            <Header />
            <Promo scrollToRef={aboutProjectRef} />
            <div ref={aboutProjectRef}>
                <AboutProject />
            </div>
            <Techs />
            <AboutMe />
            <Footer />
        </>
    );
}

export default Landing;