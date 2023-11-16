import React from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import { Routes, Route } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';

function Main () {
    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={
                    <>
                        <Promo />
                        <AboutProject />
                        <Techs />
                        <AboutMe />
                    </>
                } />
                <Route path='/signup' element={<Register />} />
                <Route path='/signin' element={<Login />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/saved-movies' element={<SavedMovies />} />
            </Routes>
        </main>  
    );
}

export default Main;