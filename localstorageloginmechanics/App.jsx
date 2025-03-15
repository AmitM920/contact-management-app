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

function App() {
  const Email = useRef();
  const pass = useRef();

  // to get the value we need to pass the key under getItem method
  const getEmail = localStorage.getItem("userEmail");
  const getPass = localStorage.getItem("userPass");
  const login = () => {
    if (
      Email.current.value === "user@gmail.com" &&
      pass.current.value === "1234"
    ) {
      localStorage.setItem("userEmail", "user@gmail.com");
      // key and value is set to local storage
      localStorage.setItem("userPass", "1234");
    }
  };

  return (
    <>
      {getEmail && getPass ? (
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
              {/* <Route path="/login" element={<Login/>}/> */}
            </Routes>
          </div>
        </>
      ) : (
        <div className="container" id="login-form">
          <h3>🐼Welcome To Contact App</h3>

          <form onSubmit={login}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                ref={Email}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                ref={pass}
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <hr />
            <button type="submit" class="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default App;
