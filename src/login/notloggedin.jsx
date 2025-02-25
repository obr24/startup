import React from "react";

export function Notloggedin(properties) {
    const [emailAddy, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    async function loginUser(e) {
        e.preventDefault();
        localStorage.setItem('emailAddy', emailAddy);
        // properties.onLogin(emailAddy);
    }
    
    async function registerUser(e) {
        e.preventDefault();
        localStorage.setItem('emailAddy', emailAddy);
        // properties.onLogin(emailAddy);
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