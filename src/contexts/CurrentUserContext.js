import React from 'react';

export const CurrentUserContext = React.createContext({
    currentUser: null,
    loggedIn: false,
    setCurrentUser: () => {},
    setLoggedIn: () => {}
});