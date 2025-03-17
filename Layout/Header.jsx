import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const logout = () => {
    localStorage.clear();
    // window.location.reload();
    window.location.replace("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand" to="#">
            🐼 Contact App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view">
                  contact view
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  Add Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registration">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <button onClick={logout} type="button" className="btn btn-dark">
                  <Link className="nav-link" id="button-link" to="/logout">
                    Logout
                  </Link>
                </button>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
