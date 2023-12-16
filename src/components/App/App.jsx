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
import { authorize, getContent, register, signOut } from '../../utils/Auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { LikesProvider } from '../../contexts/LikesContext';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { loginErrors, profileErrors, registerErrors, signOutErrors, tokenCheckErrors } from '../../constants/constatnts';
import { mainApi } from '../../utils/TempMainApi';
import Preloader from '../Preloader/Preloader';
import { handleError } from '../../utils/handleError';
import Header from '../Header/Header';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isPreloading, setIsPreloading] = useState(true);
    const [serverError, setServerError] = useState('');

    const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
    const [tooltipTitle, setTooltipTitle] = useState('');
    const [tooltipIcon, setTooltipIcon] = useState('success');

    const [isEditing, setIsEditing] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const handleEscClose = (e) => {
            if (e.key === 'Escape') {
                closePopup();
            }
        };
      
        document.addEventListener('keydown', handleEscClose);
      
        return () => {
            document.removeEventListener('keydown', handleEscClose);
        };
    }, []);

    const closePopup = () => {
        setIsInfoTooltipPopupOpen(false);
    };

    const checkToken = async () => {
        const token = localStorage.getItem('jwt');
        if (token) {
            try {
                const userData = await getContent(token);
                setCurrentUser(userData);
                setLoggedIn(true);
            } catch (err) {
                const errorMessage = handleError(err, tokenCheckErrors);
                setServerError(errorMessage);
                localStorage.removeItem('jwt');
                setLoggedIn(false);
            }
        } else {
            setLoggedIn(false);
        }
    };

    useEffect(() => {
        checkToken().finally(() => setIsPreloading(false));
    }, []);

    const handleLogin = async (password, email) => {
        setIsPreloading(true);
        try {
            const userData = await authorize(password, email);
            localStorage.setItem('jwt', userData.token);
            const userDetails = await getContent();
            setCurrentUser(userDetails);
            setLoggedIn(true);
            navigate('/movies');
            setTooltipTitle('С возвращением!');
            setTooltipIcon('success');
            setIsInfoTooltipPopupOpen(true);
        } catch (err) {
            const errorMessage = handleError(err, loginErrors);
            setServerError(errorMessage);
        } finally {
            setIsPreloading(false);
        }
    };

    async function handleRegister(name, email, password) {
        setIsPreloading(true);
        try {
            await register(name, email, password);
            const userData = await authorize(email, password);
            localStorage.setItem('jwt', userData.token);
            const userDetails = await getContent();
            setCurrentUser(userDetails);
            setLoggedIn(true);
            navigate('/movies');
            setTooltipTitle('Добро пожаловать!');
            setTooltipIcon('success');
            setIsInfoTooltipPopupOpen(true);
        } catch (err) {
            const errorMessage = handleError(err, registerErrors);
            setServerError(errorMessage);
        } finally {
            setIsPreloading(false);
        }
    }
  
    function onUpdateProfile() {
        setTooltipTitle('Профиль успешно обновлен!');
        setTooltipIcon('success');
        setIsInfoTooltipPopupOpen(true);
    }

    const handleUpdateUser = (updatedValues) => {
        setIsPreloading(true);
        mainApi.updateUser({
            name: updatedValues.username,
            email: updatedValues.email
        })
            .then((updatedUser) => {
                setCurrentUser(updatedUser);
                setIsEditing(false);
                onUpdateProfile();
            })
            .catch((error) => {
                const errorMessage = handleError(error, profileErrors);
                setServerError(errorMessage);
            })
            .finally(() => setIsPreloading(false));
    };

    function onSignOut() {
        setIsPreloading(true);
        signOut()
            .then(() => {
                localStorage.removeItem('jwt');
                localStorage.removeItem('searchQuery');
                localStorage.removeItem('isShortFilm');
                localStorage.removeItem('searchResults');
                localStorage.removeItem('isShortFilmOnly');
                setCurrentUser(null);
                setLoggedIn(false);
    
                navigate('/');
            })
            .catch((error) => {
                const errorMessage = handleError(error, signOutErrors);
                setServerError(errorMessage);
            })
            .finally(() => {
                setIsPreloading(false);
            });
    }

    return (
        <CurrentUserContext.Provider value={{ currentUser, loggedIn, setCurrentUser, setLoggedIn }}>
            <div className='page'>
                {isPreloading && <Preloader />}
                <LikesProvider>
                    <Routes>
                        <Route path='/' element={<LayoutHeaderFooter><Landing /></LayoutHeaderFooter>} />
                        <Route 
                            path='/movies' 
                            element={
                                <ProtectedRoute 
                                    loggedIn={loggedIn}
                                    isLoading={isPreloading}
                                    element={
                                        <LayoutHeaderFooter><Movies /></LayoutHeaderFooter>} />
                            } 
                        />
                        <Route 
                            path='/saved-movies' 
                            element={
                                <ProtectedRoute 
                                    loggedIn={loggedIn}
                                    isLoading={isPreloading}
                                    element={
                                        <LayoutHeaderFooter>
                                            <SavedMovies />
                                        </LayoutHeaderFooter>
                                    }
                                />
                            }
                        />
                        <Route 
                            path='/profile' 
                            element={
                                <ProtectedRoute 
                                    loggedIn={loggedIn}
                                    isLoading={isPreloading}
                                    element={
                                        <>
                                            <Header />
                                            <Profile
                                                signOut={onSignOut}
                                                onSubmit={handleUpdateUser}
                                                isEditing={isEditing}
                                                setIsEditing={setIsEditing}
                                                serverError={serverError}
                                                currentUser={currentUser}
                                                isPreloading={isPreloading}
                                            />
                                        </>
                                    }
                                />
                            }
                        />

                        <Route path='/signup' element={loggedIn ? <Navigate to="/" /> : <Register
                            onRegister={handleRegister}
                            errorMessage={serverError}
                            isPreloading={isPreloading}
                        />}
                        />
                        <Route path='/signin' element={loggedIn ? <Navigate to="/" /> : <Login
                            onLogin={handleLogin}
                            errorMessage={serverError}
                            isPreloading={isPreloading}
                        />}
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

                <InfoTooltip
                    title={tooltipTitle}
                    tooltipIcon={tooltipIcon}
                    isOpen={isInfoTooltipPopupOpen}
                    onClose={closePopup}
                />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;