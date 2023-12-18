import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function ProtectedRoute({ loggedIn, isLoading, element }) {
    return (
        isLoading ? <Preloader /> : (loggedIn ? element : <Navigate to="/signin" />)
    );
}

ProtectedRoute.propTypes = {
    element: PropTypes.element.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool
};

export default ProtectedRoute;
