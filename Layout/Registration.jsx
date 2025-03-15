import React, { useState } from "react";
import axios from "axios";
function Registration() {
  const [userAddress, setUserAddress] = useState("");
  const [pass, setPass] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        // Fetch existing users
        const response = await axios.get("http://localhost:4000/user");
        const userExists = response.data.some((u) => u.username === userAddress);
    
        if (userExists) {
          alert("User already exists! Try another.");
          return;
        } 


      await axios.post("http://localhost:4000/user", {
        username: userAddress,
        password: pass,
      });
      alert("User Register Successfully!");
      setUserAddress("");
      setPass("");
    } catch (err) {
      console.error("Registration Error:", err);
      alert("Error Registering user!");
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="text"
                className="form-control"
                value={userAddress}
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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
