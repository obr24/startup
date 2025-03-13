import React from "react";
import UserContext, { ProvideUserContext } from '../userContext';
import { useState, createContext, useContext } from "react";

export function Loggedin(properties) {
    const {emailAddy, setEmail, authenticationState, setAuthenticationState} = useContext(UserContext);
    
    const [password, setPassword] = React.useState('');
    
    async function logoutUser(e) {
        e.preventDefault();
        
        fetch('/api/logout', {
            method: 'delete',
        })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setAuthenticationState('');
                setEmail('');
            })
    }
    
    return (
        <div className="container mt-5 mb-5 d-flex justify-content-center">
            <div className="card p-4 shadow" style={{"width": "350px"}}>
                <h4 className="text-center mb-4">Logout</h4>
                <form>
                    <div className="d-flex gap-2 justify-content-between">
                        <button onClick={logoutUser} type="submit" className="btn btn-primary flex-grow-1">Logout</button>
                    </div>
                </form>
            </div>
        </div>
    );
}