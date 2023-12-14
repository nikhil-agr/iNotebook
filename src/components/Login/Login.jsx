import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const naviagte = useNavigate(); // In the latest version of react-router-dom (version 6), the useHistory hook has been replaced with the useNavigate hook1.

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the authtoken and redirect
      localStorage.setItem("token", json.authtoken);
      naviagte("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to right, #b92b27, #1565c0)";

    return () => {
      document.body.style.background = null;
    };
  }, []);

  return (
    <div className="LoginPage">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <form onSubmit={handleSubmit} className="box">
                <h1>Login</h1>
                <p className="text-white">
                  {" "}
                  Please enter your login and password!
                </p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={credentials.email}
                  onChange={onChange}
                  autoComplete="on"
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={onChange}
                  autoComplete="on"
                />
                <div className="invalid">
                  <Link className="forgot text-white" to={"/"}>
                    Forgot password?
                  </Link>
                  <Link className="forgot text-white" to={"/signup"}>
                    Doesn't Have An Account?
                  </Link>
                </div>

                <input type="submit" name="" value="Login" to={"/"} />

                <div className="col-md-12">
                  <ul className="social-network social-circle">
                    <li>
                      <Link to={"/"} className="icoFacebook" title="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"} className="icoTwitter" title="Twitter">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"} className="icoGoogle" title="Google +">
                        <i className="fab fa-google-plus"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
