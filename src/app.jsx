import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';     // TODO remove

export default function App() {
    return (
    <div className="body d-flex flex-column vh-100">
        {/* start navbar */}
        <nav id="main-navbar" className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="d-inline-flex flex-column">
                    <a className="navbar-brand" href="#">
                        <span className="fs-3 link-body-emphasis text-decoration-none">Recipe Book</span>
                    </a>
                    <div className="mt-0">Welcome, Jeff</div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="fs-4 nav-link active" href="index.html">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="fs-4 nav-link" href="submit.html">Submit Recipe</a>
                        </li>
                        <li className="nav-item">
                            <a className="fs-4 nav-link" href="view.html">View Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a className="fs-4 nav-link" href="inspiration.html">Inspiration</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* end navbar */}

        {/* start main components */}
        <main>App components go here</main>
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
    );
  }