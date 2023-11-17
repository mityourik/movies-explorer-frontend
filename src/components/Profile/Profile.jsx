import React, { useState } from 'react';
import './Profile.css';
import ProfileForm from '../ProfileForm/ProfileForm';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

function Profile ({ isPreloading, userName }) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <Header />
            <div className='profile__container'>
                <h1 className='profile__title'>{`Привет, ${userName}!`}</h1>
                <ProfileForm
                    isEditing={isEditing}
                >
                    {isEditing ? (
                        <button
                            className='profile__submit-button'
                            type='submit'
                            onSubmit={() => console.log('Submit Profile')}
                        >
                            {isPreloading ? 'Загрузка...' : 'Сохранить'}
                        </button>
                    ) : (
                        <button
                            className='profile__edit-button'
                            onClick={() => setIsEditing(true)}
                        >
                            Редактировать
                        </button>
                    )}
                    <button
                        className='profile__exit-button'
                        onClick={() => console.log('Выход')}
                    >
                        Выйти из аккаунта
                    </button>
                </ProfileForm>
            </div>
        </>
    );
}

Profile.propTypes = {
    isPreloading: PropTypes.bool,
    userName: PropTypes.string
};

export default Profile;