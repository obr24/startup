import React, { useEffect } from 'react';
import { useState, createContext } from 'react';

const UserContext = createContext();

export function ProvideUserContext({ children }) {
    const [emailAddy, setEmail] = React.useState(localStorage.getItem('emailAddy') || '');
    const [authenticationState, setAuthenticationState] = React.useState(localStorage.getItem('authenticationState') || '');

    useEffect(() => {
        localStorage.setItem('authenticationState', authenticationState);
    }, [authenticationState]);

    const value = {
        emailAddy,
        setEmail,
        authenticationState,
        setAuthenticationState
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
  }

export default UserContext;