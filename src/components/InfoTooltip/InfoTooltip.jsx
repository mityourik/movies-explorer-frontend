import React, { useEffect } from 'react';
import doneIcon from '../../images/infoTooltip__done-icon.svg';
import errorIcon from '../../images/infoTooltip__error-icon.svg';
import PropTypes from 'prop-types';
import './InfoTooltip.css';

const InfoTooltip = ({ isOpen, tooltipIcon, title, onClose }) => {

    useEffect(() => {
        if (!isOpen) return;

        const closeByEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', closeByEscape);

        return () => document.removeEventListener('keydown', closeByEscape);

    }, [isOpen, onClose]);

    const handleOverlay = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleContainerClick = (e) => {
        e.stopPropagation();  // блокирование всплытия обработчика до оверлея
    };

    return (
        <div
            className={`info-tooltip ${isOpen ? 'info-tooltip_opened' : ''}`}
            onClick={handleOverlay}
        >
            <div className='info-tooltip__container info-tooltip__container_content_tooltip' onClick={handleContainerClick}>
                <button
                    className='info-tooltip__close-button'
                    type='button'
                    aria-label='Кнопка Закрыть окно'
                    onClick={onClose}
                />
                <div className='info-tooltip__icon'>
                    {tooltipIcon === 'success' && (
                        <img src={doneIcon} alt='Изображение Выполнено' />)}
                    {tooltipIcon === 'error' && <img src={errorIcon} alt='Изображение Ошибка' />}
                </div>
                <h2 className='info-tooltip__title'>{title}</h2>
            </div>
        </div>
    );
};

InfoTooltip.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    tooltipIcon: PropTypes.oneOf(['success', 'error']).isRequired,
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default InfoTooltip;