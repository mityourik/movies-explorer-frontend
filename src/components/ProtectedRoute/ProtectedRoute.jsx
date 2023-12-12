import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, loggedIn }) => {
    return loggedIn ? element : <Navigate to='/movies' replace />;
};

ProtectedRoute.propTypes = {
    element: PropTypes.element.isRequired,
    loggedIn: PropTypes.bool.isRequired
};

export default ProtectedRoute;
