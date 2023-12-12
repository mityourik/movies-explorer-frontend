import React, { useContext, useState } from 'react';
import './Profile.css';
import ProfileForm from '../ProfileForm/ProfileForm';
import PropTypes from 'prop-types';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/TempMainApi';
import Preloader from '../Movies/Preloader/Preloader';
import { profileErrors } from '../../constants/constatnts';

function Profile ({ isPreloading, signOut }) {
    const [isEditing, setIsEditing] = useState(false);
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [serverError, setServerError] = useState('');

    if (!currentUser) {
        return <Preloader />;
    }

    const handleUpdateUser = (updatedValues) => {
        mainApi.updateUser({
            name: updatedValues.username,
            email: updatedValues.email
        })
            .then((updatedUser) => {
                setCurrentUser(updatedUser);
                setIsEditing(false);
            })
            .catch((error) => {
                console.error(error);
    
                let errorMessage = 'При обновлении профиля произошла ошибка.';
                const status = error.response?.status || 500; // вынести в утилсы
    
                if (profileErrors[status]) {
                    errorMessage = profileErrors[status];
                }
    
                setServerError(errorMessage);
            });
    };

    return (
        <main className='main'>
            <section className='profile'>
                <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
                <ProfileForm
                    isEditing={isEditing}
                    initialName={currentUser.name}
                    initialEmail={currentUser.email}
                    onSubmit={handleUpdateUser}
                >
                    {isEditing ? (
                        <>
                            <span className='profile__span-error'>{serverError}</span>
                            <button
                                className='profile__submit-button'
                                type='submit'
                            >
                                {isPreloading ? 'Загрузка...' : 'Сохранить'}
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className='profile__edit-button'
                                onClick={() => setIsEditing(true)}
                            >
                            Редактировать
                            </button>
                            <button
                                className='profile__exit-button'
                                onClick={signOut}
                            >
                            Выйти из аккаунта
                            </button>
                        </>
                    )}
                </ProfileForm>
            </section>
        </main>
    );
}

Profile.propTypes = {
    isPreloading: PropTypes.bool,
    userName: PropTypes.string,
    signOut: PropTypes.func
};

export default Profile;