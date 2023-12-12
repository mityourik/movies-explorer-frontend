import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import LayoutHeaderFooter from '../LayoutHeaderFooter/LayoutHeaderFooter';
import { getContent } from '../../utils/Auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { LikesProvider } from '../../contexts/LikesContext';

function App() {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('jwt') ? true : false);
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        getContent()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const checkToken = async () => {
        const token = localStorage.getItem('jwt');
        if (token) {
            try {
                const userData = await getContent(token);
                setCurrentUser(userData);
                setLoggedIn(true);
            } catch (err) {
                console.log(err);
                setLoggedIn(false);
            }
        }
    };   
  
    useEffect(() => {
        checkToken();
    }, []);

    function signOut() {
        localStorage.removeItem('jwt');
        sessionStorage.removeItem('searchQuery');
        sessionStorage.removeItem('isShortFilm');
        sessionStorage.removeItem('searchResults');
        sessionStorage.removeItem('isShortFilmOnly');
        setLoggedIn(false);
        navigate('/');
    }
    

    return (
        <CurrentUserContext.Provider value={{ currentUser, loggedIn, setCurrentUser, setLoggedIn }}>
            <LikesProvider>
                <Routes>
                    <Route path='/' element={<LayoutHeaderFooter><Landing /></LayoutHeaderFooter>} />
                    <Route 
                        path='/movies' 
                        element={
                            <ProtectedRoute 
                                loggedIn={loggedIn} 
                                element={
                                    <LayoutHeaderFooter>
                                        <Movies />
                                    </LayoutHeaderFooter>} 
                            />
                        } 
                    />
                    <Route path='/saved-movies' element={
                        <LayoutHeaderFooter>
                            <SavedMovies />
                        </LayoutHeaderFooter>} />
                    <Route path='/profile' element={
                        <LayoutHeaderFooter>
                            <Profile
                                signOut={signOut}
                            />
                        </LayoutHeaderFooter>} />

                    <Route path='/signup' element={
                        <Register/>}
                    />
                    <Route path='/signin' element={<Login />} />

                    <Route path='*' element={<NotFoundPage />} />
                    <Route
                        path="*"
                        element={
                            <Navigate
                                to={loggedIn ? '/' : '/signin'} />}
                    />
                </Routes>
            </LikesProvider>
        </CurrentUserContext.Provider>
    );
}

export default App;