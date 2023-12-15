import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <nav
        className="navbar bg-dark navbar-expand border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>

            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link
                  to={"/signup"}
                  role="button"
                  className="btn btn-primary mx"
                >
                  SignUp
                </Link>
                <Link
                  to={"/login"}
                  role="button"
                  className="btn btn-primary mx-2"
                >
                  Login
                </Link>
              </form>
            ) : (
              <button onClick={handleLogout} className="btn btn-primary">
                LogOut
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
