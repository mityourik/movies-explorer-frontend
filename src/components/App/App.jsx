import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Profile from '../Profile/Profile';

function App() {
    return (
        <div className='page'>
            <Routes>
                <Route path='*' element={<NotFoundPage />} />
                <Route path='/' element={<Landing />} />
                <Route path='/signup' element={<Register />} />
                <Route path='/signin' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/saved-movies' element={<SavedMovies />} />
            </Routes>
        </div>
    );
}

export default App;
