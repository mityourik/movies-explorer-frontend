import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const LikesContext = createContext({
    likedMovies: [],
    setLikedMovies: () => {}
});

export const LikesProvider = ({ children }) => {
    const [likedMovies, setLikedMovies] = useState([]);

    return (
        <LikesContext.Provider value={{ likedMovies, setLikedMovies }}>
            {children}
        </LikesContext.Provider>
    );
};

LikesProvider.propTypes = {
    children: PropTypes.node.isRequired
};