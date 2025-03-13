import React from "react";
import UserContext, { ProvideUserContext } from '../userContext';
import { useState, createContext, useContext } from "react";

export function Notloggedin(properties) {
    {/* const [emailAddy, setEmail] = React.useState(localStorage.getItem('emailAddy') || '');
    const emailAddy = useContext(UserContext);
    const [emailAddy, setEmail] = useContext(UserContext);
    */}

    const {emailAddy, setEmail, authenticationState, setAuthenticationState} = useContext(UserContext);
    
    const [password, setPassword] = React.useState('');
    
    async function loginUser(e) {
        loginOrCreate('/api/login/');
    }
    
    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
          method: 'post',
          body: JSON.stringify({ email: emailAddy, password: password }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        if (response?.status === 200) {
          localStorage.setItem('emailAddy', emailAddy);
          setAuthenticationState('authenticated');
        } else {
          const body = await response.json();
          console.log(`⚠ Error: ${body.msg}`);
        }
      }
     
    async function registerUser(e) {
        loginOrCreate('/api/register/');
    }

    return (
        <div className="container mt-5 mb-5 d-flex justify-content-center">
            <div className="card p-4 shadow" style={{"width": "350px"}}>
                <h4 className="text-center mb-4">Login</h4>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input value={emailAddy} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Enter your email" required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Enter your password" required></input>
                    </div>
                    <div className="d-flex gap-2 justify-content-between">
                        <button onClick={loginUser} type="submit" className="btn btn-primary flex-grow-1">Login</button>
                        <button onClick={registerUser} type="button" className="btn btn-outline-secondary flex-grow-1">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}