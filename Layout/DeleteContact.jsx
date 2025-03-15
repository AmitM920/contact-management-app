import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DeleteContact() {
  const { id } = useParams();

  const [userdel, setUserdel] = useState([]);
  useEffect(() => {
    axios
      .delete(`http://localhost:4000/user/${id}`)
      .then((res) => {
        setUserdel(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useParams();
  return <div>Contact has been Deleted</div>;
}

export default DeleteContact;
