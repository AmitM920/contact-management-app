import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteContact() {
  const { id } = useParams();

  const [userdel, setUserdel] = useState([]);
  useEffect(() => {
    axios
      .delete(`https://contact-management-server-b78r.onrender.com/user/${id}`)
      .then((res) => {
        setUserdel(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const Navigate = useNavigate();
  useParams();
  return Navigate("/view");
}

export default DeleteContact;
