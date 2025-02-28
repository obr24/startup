import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Login } from "./login/login";
import { Inspiration } from "./inspiration/inspiration";
import { Submit } from "./submit/submit";
import { View } from "./view/view";
import "./app.css"; // TODO remove
import { useState, createContext, useContext } from "react";
import UserContext, { ProvideUserContext } from "./userContext";

import Navbar from 'react-bootstrap/Navbar';

export default function App() {
  return (
    <ProvideUserContext>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ProvideUserContext>
  );
}

function AppContent() {
  const { emailAddy, setEmail, authenticationState, setAuthenticationState } =
    useContext(UserContext);

  function NavBar() {
    return (
        <Navbar expand="md" className="bg-body-tertiary">
    
        <div className="container-fluid">
          <div className="d-inline-flex flex-column">
            <a className="navbar-brand" href="#">
              <span className="fs-3 link-body-emphasis text-decoration-none">
                Recipe Book
              </span>
            </a>
            {authenticationState && (
              <div className="mt-0">Welcome, {emailAddy}</div>
            )}
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link fs-4 nav-link" to="">
                  Login
                </NavLink>
              </li>
              {authenticationState && (
                <li className="nav-item">
                  <NavLink className="nav-link fs-4 nav-link" to="submit">
                    Submit Recipe
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink className="nav-link fs-4 nav-link" to="view">
                  View Recipes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4 nav-link" to="inspiration">
                  Inspiration
                </NavLink>
              </li>
            </ul>
            </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
  return (
    <div
      className="body d-flex flex-column vh-100"
      style={{ height: "100dvh" }}
    >
      < NavBar />
      {/* end navbar */}

      {/* start main components */}
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/submit" element={<Submit />} />
        <Route path="/view" element={<View />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* end main components */}

      {/* start footer */}
      <footer className="navbar bg-body-tertiary mt-auto">
        <div className="container">
          <span className="text-rest">by Orion</span>
          <br />
          <a href="https://github.com/obr24/startup">Github</a>
        </div>
      </footer>
      {/* end footer */}
    </div>
  );
}
function NotFound() {
  return (
    <main className="container-fluid bg-secondary text-center">
      404: Return to sender. Address unknown.
    </main>
  );
}
