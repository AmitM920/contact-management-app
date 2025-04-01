// WelcomePage.jsx
import React, { useState } from "react";
import { Routes, useNavigate, Route } from "react-router-dom";
import Registration from "./Registration";

const WelcomePage = ({
  login,
  userAddress,
  setUserAddress,
  pass,
  setPass,
  Div,
}) => {
  const navigate = useNavigate();
  const [showRegistration, setShowRegistration] = useState(false);

  // Toggle function for the registration form
  const toggleRegistration = (e) => {
    e.preventDefault();
    setShowRegistration((prev) => !prev);
  };
  return (
    <div className="container" id="login-form">
      <h3>🐼Welcome To Contact App</h3>
      <div class="card">
      <div class="card-body">
      <form onSubmit={login}>
        <div
          className="form-group"
          style={{ display: Div ? "block" : "none", transition: "all 0.5s" }}
        >
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div
          className="form-group"
          style={{ display: Div ? "block" : "none", transition: "all 0.5s" }}
        >
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <hr />
        <button type="submit" className="btn btn-dark" id="btn_login">
         {Div?"Hide Login Form":"Login"}
        </button>
        
        <button type="button" className="btn btn-dark" onClick={toggleRegistration} style={{margin:"2px"}}>
        {showRegistration ? "Hide Registration Form" : "Register"}
          {/* <div
          style={{
            display: showFirstDiv ? "none" : "block",
            transition: "all 0.5s",
        }}
          >
           
            <Routes>
              <Route>
                <Route path="/registration" element={<Registration showFirstDiv={showFirstDiv}  setShowFirstDiv={setShowFirstDiv}/>} />
              </Route>
            </Routes>
          </div> */}
        </button>
      
            <hr className="bottom-hr" />
      </form>
      </div>
      </div>
       {/* Conditionally render the Registration component */}
       {showRegistration && (
        <div>
          <Registration />
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
