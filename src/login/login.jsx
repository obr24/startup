import React from 'react';

export function Login() {
  return (
    <main>
        <div className="container mt-5 mb-5 d-flex justify-content-center">
            <div className="card p-4 shadow" style={{"width": "350px"}}>
                <h4 className="text-center mb-4">Login</h4>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" required></input>
                    </div>
                    <div className="d-flex gap-2 justify-content-between">
                        <button type="submit" className="btn btn-primary flex-grow-1">Login</button>
                        <button type="button" className="btn btn-outline-secondary flex-grow-1">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
  );
}