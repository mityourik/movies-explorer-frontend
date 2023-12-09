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
import { authorize, getContent, register } from '../../utils/Auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { LikesProvider } from '../../contexts/LikesContext';

function App() {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('jwt') ? true : false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isPreloading, setIsPreloading] = useState(false);
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

    function onRegister() {// Обработка успешной регистрации
        console.log('Registered... ok');
    }

    function onError() {
        console.log('register is unsuccesful');
    }

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

    function handleRegister(name, email, password) {
        setIsPreloading(true);
        register(name, email, password)
            .then(() => {
                navigate('/signin');
                onRegister();
            })
            .catch(err => {
                onError();
                console.log(err);
            })
            .finally(() => setIsPreloading(false));
    }

    function handleLogin(password, email) {
        setIsPreloading(true);
        authorize(password, email)
            .then(res => {
                localStorage.setItem('jwt', res._id);
                checkToken();
                navigate('/');
            })
            .catch(err => {
                onError();
                console.log(err);
            })
            .finally(() => setIsPreloading(false));
    }

    function signOut() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('searchQuery');
        localStorage.removeItem('searchResults');
        localStorage.removeItem('isShortFilm');
    
        setLoggedIn(false);
    
        navigate('/signin');
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
                        <Register
                            isPreloading={isPreloading}
                            onRegister={handleRegister} />}
                    />
                    <Route path='/signin' element={
                        <Login
                            onLogin={handleLogin}
                            isPreloading={isPreloading} />}
                    />

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