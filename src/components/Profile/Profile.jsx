import React from 'react';
import './Profile.css';
import ProfileForm from '../ProfileForm/ProfileForm';
import PropTypes from 'prop-types';
import Preloader from '../Movies/Preloader/Preloader';

function Profile ({ signOut, onSubmit, isEditing, serverError, currentUser, isPreloading, setIsEditing }) {

    if (!currentUser) {
        return <Preloader />;
    }

    return (
        <main className='main'>
            <section className='profile'>
                <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
                <ProfileForm
                    isEditing={isEditing}
                    initialName={currentUser.name}
                    initialEmail={currentUser.email}
                    onSubmit={onSubmit}
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
    signOut: PropTypes.func,
    onSubmit: PropTypes.func,
    isEditing: PropTypes.bool,
    setIsEditing: PropTypes.func,
    serverError: PropTypes.string,
    currentUser: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
    }),
    isPreloading: PropTypes.bool
};

export default Profile;