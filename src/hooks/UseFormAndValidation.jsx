import { useState, useCallback } from 'react';

export function useFormAndValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const validate = (name, value) => {
        let errorMessage = '';

        if (!value) {
            errorMessage = 'Это поле не может быть пустым';
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            errorMessage = 'Некорректный формат электронной почты';
        } else if (name === 'password' && value.length < 6) {
            errorMessage = 'Пароль должен быть не менее 6 символов';
        } else if (name === 'username' && value.length < 3) {
            errorMessage = 'Имя должно содержать не менее 3 символов';
        }

        return errorMessage;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const form = e.target.closest('form');
    
        const errorMessage = validate(name, value);
    
        setValues(prevValues => ({ ...prevValues, [name]: value }));
        setErrors(prevErrors => ({ ...prevErrors, [name]: errorMessage }));
        setIsValid(form.checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}