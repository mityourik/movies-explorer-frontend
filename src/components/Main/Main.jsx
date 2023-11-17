import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Landing from '../Landing/Landing';

function Main () {
    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/signup' element={<Register />} />
                <Route path='/signin' element={<Login />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/saved-movies' element={<SavedMovies />} />
            </Routes>
        </main>  
    );
}

export default Main;