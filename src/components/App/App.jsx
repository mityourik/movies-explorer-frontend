import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import LayoutHeaderFooter from '../LayoutHeaderFooter/LayoutHeaderFooter';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LayoutHeaderFooter><Landing /></LayoutHeaderFooter>} />
            <Route path="/movies" element={<LayoutHeaderFooter><Movies /></LayoutHeaderFooter>} />
            <Route path="/saved-movies" element={<LayoutHeaderFooter><SavedMovies /></LayoutHeaderFooter>} />
            <Route path="/profile" element={<LayoutHeaderFooter><Profile /></LayoutHeaderFooter>} />

            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;