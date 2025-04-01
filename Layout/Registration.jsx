import React, { useState } from "react";
import axios from "axios";
function Registration() {
  const [userAddress, setUserAddress] = useState("");
  const [pass, setPass] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Fetch existing users
      const response = await axios.get(
        "https://contact-management-server-b78r.onrender.com/user"
      );
      const userExists = response.data.some((u) => u.username === userAddress);

      if (userExists) {
        alert("User already exists! Try another.");
        return;
      }

      await axios.post(
        "https://contact-management-server-b78r.onrender.com/user",
        {
          username: userAddress,
          password: pass,
        }
      );
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
      <div class="card">
        <div class="card-body-register">
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
              <label htmlFor="exampleInputPassword1">Set Password</label>
              <input
                type="password"
                className="form-control"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn btn-dark reg-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
