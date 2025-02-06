import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Inspiration } from './inspiration/inspiration';
import { Submit } from './submit/submit';
import { View } from './view/view';
import './app.css';     // TODO remove

export default function App() {
    return (
        <BrowserRouter>
    <div className="body d-flex flex-column vh-100">
        {/* start navbar */}
        {/*<nav id="main-navbar" className="navbar navbar-expand-lg bg-body-tertiary">*/}
        <nav id="main-navbar" className="navbar navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">
                <div className="d-inline-flex flex-column">
                    <a className="navbar-brand" href="#">
                        <span className="fs-3 link-body-emphasis text-decoration-none">Recipe Book</span>
                    </a>
                    <div className="mt-0">Welcome, Jeff</div>
                </div>
        {/* Add back in when i add reactivity */}
                {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>*/}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link fs-4 nav-link" to="">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-4 nav-link" to="submit">Submit Recipe</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-4 nav-link" to="view">View Recipes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-4 nav-link" to="inspiration">Inspiration</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* end navbar */}

        {/* start main components */}
        <Routes>
          <Route path='/' element={<Login />} exact />
          <Route path='/submit' element={<Submit />} />
          <Route path='/view' element={<View />} />
          <Route path='/inspiration' element={<Inspiration />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/* end main components */}
        
        {/* start footer */}
        <footer className="navbar bg-body-tertiary mt-auto">
            <div className="container">
                <span className="text-rest">by Orion</span>
                <br/>
                <a href="https://github.com/obr24/startup">Github</a>
            </div>
        </footer>
        {/* end footer */}
    </div>
</BrowserRouter>
    );
  }

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}