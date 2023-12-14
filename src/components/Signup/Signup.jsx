import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const naviagte = useNavigate(); // In the latest version of react-router-dom (version 6), the useHistory hook has been replaced with the useNavigate hook1.

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        // save the authtoken and redirect
        localStorage.setItem("token", json.authtoken);
        naviagte("/");
    }else{
        alert("Invalid Credentials");
    }

  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#009579";

    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  return (
    <div className="Signup">
      <div className="container">
        <input type="checkbox" id="check" />
        <div className="login form">
          <header>SignUp</header>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              value={credentials.name}
              onChange={onChange}
              placeholder="Enter your Name"
              autoComplete="on"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              placeholder="Enter your Email"
              autoComplete="on"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              placeholder="Enter your Password"
              autoComplete="on"
              minLength={5}
              required
            />
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              value={credentials.cpassword}
              onChange={onChange}
              placeholder="Confirm your password"
              autoComplete="on"
              minLength={5}
              required
            />
            <div className="d-flex justify-content-between">
              <Link to={"/"}>Forgot password?</Link>
              <Link to={"/login"}>Already Have An Account?</Link>
            </div>
            <input type="submit" className="button" value="SignUp" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
