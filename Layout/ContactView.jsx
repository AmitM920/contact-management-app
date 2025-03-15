import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ContactView() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/user")
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  // const list = user.map((set)=>(<>
  // <tr key={set.id}>
  //   <td>{set.id}</td>
  //   <td>{set.first_name}</td>
  //   <td>{set.last_name}</td>
  //   <td>{set.username}</td>
  //   <td>{set.city}</td>
  //   <td>{set.state}</td>
  //   <td>{set.zip}</td>
  //   <Link to={`/update/${id}`}>Update</Link>
  //   <Link to="/delete">Delete</Link>
  //   </tr>
  //   </>))
  // # the above code is correct but has link tag under tr tag which is prohibited so we need to wrap the link component inside the td
  return (
    <div className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Ids</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Username</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Zip</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.username}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>{user.zip}</td>
              <td>
                {" "}
                {/* Wrap Links inside <td> */}
                <Link
                  to={`/update/${user.id}`}
                  className="btn btn-dark btn-sm me-2"
                  id="action-bt"
                >
                  Update
                </Link>
                <Link
                  to={`/delete/${user.id}`}
                  className="btn btn-dark btn-sm me-2"
                  id="action-bt"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactView;
