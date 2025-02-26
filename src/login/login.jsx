import React from 'react';
import { Notloggedin } from './notloggedin';
import { useState, createContext, useContext } from "react";

import UserContext, { ProvideUserContext } from '../userContext';
import { Loggedin } from './loggedin';

export function Login() {
    const {emailAddy, setEmail, authenticationState, setAuthenticationState} = useContext(UserContext);
if (authenticationState) {
  return (
    <main>
      < Loggedin />
    </main>
  );
} else {
  return (
    <main>
      < Notloggedin />
    </main>
  );
}
}