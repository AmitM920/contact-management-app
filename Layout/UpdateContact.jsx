import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateContact() {
  const nav = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    axios
      .get(`https://contact-management-server-b78r.onrender.com/user/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const updater = (e) => {
    e.preventDefault();
    axios.put(
      `https://contact-management-server-b78r.onrender.com/user/${id}`,
      user
    );
    nav("/view");
  };

  return (
    <>
      <div className="d-flex align-items-start">
        <div style={{ flex: "0 0 40%", paddingRight: "20px" }}>
          <h2 className="h2id float-left">Id of the user: {id}</h2>
          <img
            src="https://images.pexels.com/photos/1181511/pexels-photo-1181511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="pic"
            width="100%"
          />
        </div>
        <div className="flex-grow-1">
          <div class="card">
            <div class="card-body">
              <form className="needs-validation float-right" noValidate>
                <div className="form-row">
                  <div className="col-md-4 mb-3">
                    <label for="validationCustom01">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom01"
                      placeholder="First name"
                      value={user.first_name}
                      onChange={(e) =>
                        setUser({ ...user, first_name: e.target.value })
                      }
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="validationCustom02">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom02"
                      placeholder="Last name"
                      value={user.last_name}
                      onChange={(e) =>
                        setUser({ ...user, last_name: e.target.value })
                      }
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="validationCustomUsername">Username</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          @
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustomUsername"
                        placeholder="Username"
                        value={user.username}
                        onChange={(e) =>
                          setUser({ ...user, username: e.target.value })
                        }
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label for="validationCustom03">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom03"
                      placeholder="City"
                      value={user.city}
                      onChange={(e) =>
                        setUser({ ...user, city: e.target.value })
                      }
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid city.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="validationCustom04">State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom04"
                      placeholder="State"
                      value={user.state}
                      onChange={(e) =>
                        setUser({ ...user, state: e.target.value })
                      }
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="validationCustom05">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom05"
                      placeholder="Zip"
                      value={user.zip}
                      onChange={(e) =>
                        setUser({ ...user, zip: e.target.value })
                      }
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid zip.
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />
                    <label className="form-check-label" for="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={updater}
                >
                  Submit form
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByclassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classNameList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script> */}
    </>
  );
}

export default UpdateContact;
