import axios from "axios";
import React, { useState } from "react";

function AddContact() {
  const [info, setInfo] = useState({
    first_name: "",
    last_name: "",
    username: "",
    city: "",
    state: "",
    zip: "",
  });
  const insert = () => {
    axios.post("https://contact-management-server-b78r.onrender.com/user", info);
  };
  return (
    <>
      <form class="needs-validation" novalidate>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationCustom01">First name</label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              placeholder="First name"
              value={info.first_name}
              onChange={(e)=>setInfo({...info,first_name:e.target.value})}
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustom02">Last name</label>
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              placeholder="Last name"
              value={info.last_name}
              onChange={(e)=>setInfo({...info,last_name:e.target.value})}
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustomUsername">Username</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">
                  @
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                placeholder="Username"
                value={info.username}
                onChange={(e)=>setInfo({...info,username:e.target.value})}
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationCustom03">City</label>
            <input
              type="text"
              class="form-control"
              id="validationCustom03"
              placeholder="City"
              value={info.city}
              onChange={(e)=>setInfo({...info,city:e.target.value})}
              required
            />
            <div class="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationCustom04">State</label>
            <input
              type="text"
              class="form-control"
              id="validationCustom04"
              placeholder="State"
              value={info.state}
              onChange={(e)=>setInfo({...info,state:e.target.value})}
              required
            />
            <div class="invalid-feedback">Please provide a valid state.</div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationCustom05">Zip</label>
            <input
              type="text"
              class="form-control"
              id="validationCustom05"
              placeholder="Zip"
              value={info.zip}
              onChange={(e)=>setInfo({...info,zip:e.target.value})}
              required
            />
            <div class="invalid-feedback">Please provide a valid zip.</div>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <button class="btn btn-primary" type="submit" onClick={insert}>
          Submit form
        </button>
      </form>
    </>
  );
}

export default AddContact;
