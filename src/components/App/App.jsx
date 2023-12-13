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
import { getContent, register } from '../../utils/Auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { LikesProvider } from '../../contexts/LikesContext';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { profileErrors, registerErrors } from '../../constants/constatnts';
import { mainApi } from '../../utils/TempMainApi';

function App() {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('jwt') ? true : false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isPreloading, setIsPreloading] = useState(false);
    const [serverError, setServerError] = useState('');

    const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
    const [tooltipTitle, setTooltipTitle] = useState('');
    const [tooltipIcon, setTooltipIcon] = useState('');

    const [isEditing, setIsEditing] = useState(false);

    const navigate = useNavigate();

    const popupToClose = {
        isInfoTooltipPopupOpen
    };

    useEffect(() => {
        const handleEscClose = (e) => {
            if (e.key === 'Escape' && popupToClose) {
                closeAllPopups();
            }
        };
      
        if (popupToClose) {
            document.addEventListener('keydown', handleEscClose);
        }
      
        return () => {
            document.removeEventListener('keydown', handleEscClose);
        };
    }, [popupToClose]);

    const closeAllPopups = () => {
        setIsInfoTooltipPopupOpen(false);
    };

    const closePopup = () => {
        setIsInfoTooltipPopupOpen(false);
    };

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

    function onRegister() {
        setTooltipTitle('Добро пожаловать!');
        setTooltipIcon('success');
        setIsInfoTooltipPopupOpen(true);
    }

    function handleRegister(name, email, password) {
        setIsPreloading(true);
        register(name, email, password)
            .then(() => {
                setLoggedIn(true);
                navigate('/movies');
                onRegister();
            })
            .catch(err => {
                let errorMessage = 'Произошла неизвестная ошибка.';
                if (registerErrors[err.status]) {
                    errorMessage = registerErrors[err.status];
                }
                setServerError(errorMessage);
            })
            .finally(() => setIsPreloading(false));
    }
  
    useEffect(() => {
        checkToken();
    }, []);

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
                console.error(error);
                const status = error.response?.status || 500; // Правильно определить status
                let errorMessage = 'При обновлении профиля произошла ошибка.';
                if (profileErrors[status]) {
                    errorMessage = profileErrors[status];
                }
                setServerError(errorMessage);
            })
            .finally(() => setIsPreloading(false));
    };

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
            <div className='page'>
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
                        <Route 
                            path='/profile' 
                            element={
                                <ProtectedRoute 
                                    loggedIn={loggedIn} 
                                    element={
                                        <LayoutHeaderFooter>
                                            <Profile
                                                signOut={signOut}
                                                onSubmit={handleUpdateUser}
                                                isEditing={isEditing}
                                                setIsEditing={setIsEditing}
                                                serverError={serverError}
                                                currentUser={currentUser}
                                                isPreloading={isPreloading}
                                            />
                                        </LayoutHeaderFooter>
                                    }
                                />
                            }
                        />
                        <Route path='/signup' element={
                            <Register
                                onRegister={handleRegister}
                                errorMessage={serverError}
                                isPreloading={isPreloading}
                            />}
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