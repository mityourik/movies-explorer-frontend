import React, { useEffect } from 'react';
import './Profile.css';
import ProfileForm from '../ProfileForm/ProfileForm';
import PropTypes from 'prop-types';
import Preloader from '../Movies/Preloader/Preloader';
import { useFormAndValidation } from '../../hooks/UseFormAndValidation';

function Profile({ signOut, onSubmit, isEditing, serverError, currentUser, isPreloading, setIsEditing }) {
    const { values, handleChange, errors, isValid, setValues } = useFormAndValidation();

    useEffect(() => {
        if (currentUser) {
            setValues({ username: currentUser.name, email: currentUser.email });
        }
    }, [currentUser, setValues]);

    const isDataChanged = values.username !== currentUser?.name || values.email !== currentUser?.email;
    const buttonClass = `profile__submit-button ${!isDataChanged || isPreloading || !isValid ? 'profile__submit-button_disabled' : ''}`;

    if (!currentUser) {
        return <Preloader />;
    }

    function handleSubmit(values) {
        onSubmit(values);
    }

    return (
        <main className='main'>
            <section className='profile'>
                <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
                <ProfileForm
                    isEditing={isEditing}
                    initialName={currentUser.name}
                    initialEmail={currentUser.email}
                    onSubmit={handleSubmit}
                    handleChange={handleChange}
                    errors={errors}
                    values={values}
                >
                    {isEditing && (
                        <>
                            <span className='profile__span-error'>{serverError}</span>
                            <button
                                className={buttonClass}
                                type='submit'
                                disabled={!isDataChanged || isPreloading || !isValid}
                            >
                                {isPreloading ? 'Загрузка...' : 'Сохранить'}
                            </button>
                        </>
                    )}
                    {!isEditing && (
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
