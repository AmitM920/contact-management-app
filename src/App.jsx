import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import { Route, Routes } from "react-router-dom";
import ContactView from "../Layout/ContactView";
import AddContact from "../Layout/AddContact";
import UpdateContact from "../Layout/UpdateContact";
import DeleteContact from "../Layout/DeleteContact";
import AboutProject from "../Layout/AboutProject";
import Registration from "../Layout/Registration";
// import Login from "../Layout/Login";
import FocusInput from "../Layout/FocusInput";
import PreviosStateExample from "../Layout/PreviosStateExample";
import Logout from "../Layout/Logout";
import axios from "axios";

function App() {
  const [userAddress, setUserAddress] = useState("");
  const [pass, setPass] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:4000/user");
      const user = response.data.find((user) => (
        user.username === userAddress && user.password === pass
      ));
      if (user) {
        // alert("Login successful");
        setIsLoggedIn(true);
        setUserAddress("");
        setPass("");
      } else {
        alert("Invalid credentials, try again !");
        console.error("Invalid credentials: No matching user found.");
      }
    } catch (error) {
      console.error("fetching error:", error);
      alert("An error occurred while login");
    }
  };
  return (
    <>
      {isLoggedIn ? (
        <>
          <Header></Header>
          <div className="useRef">
            <PreviosStateExample />
            <FocusInput />
          </div>
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Banner />} />
              <Route path="/view" element={<ContactView></ContactView>} />
              <Route path="/add" element={<AddContact />} />
              <Route
                path="/update/:id"
                element={
                  <>
                    <UpdateContact />
                  </>
                }
              />
              <Route path="/delete/:id" element={<DeleteContact />} />
              <Route path="/about" element={<AboutProject />} />
              <Route path="/Registration" element={<Registration />} />
              <Route path="/logout" element={<Logout />}></Route>
              {/* <Route path="/login" element={<Login/>}/> */}
            </Routes>
          </div>
        </>
      ) : (
        <div className="container" id="login-form">
          <h3>🐼Welcome To Contact App</h3>

          <form onSubmit={login}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="text"
                className="form-control"
                valule={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
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
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <hr />
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default App;
