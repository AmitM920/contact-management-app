// AfterLogin.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import ContactView from "../Layout/ContactView";
import AddContact from "../Layout/AddContact";
import UpdateContact from "../Layout/UpdateContact";
import DeleteContact from "../Layout/DeleteContact";
import AboutProject from "../Layout/AboutProject";
import Registration from "../Layout/Registration";
import Logout from "../Layout/Logout";
import FocusInput from "../Layout/FocusInput";
import PreviosStateExample from "../Layout/PreviosStateExample";

const AfterLogin = () => {
  return (
    <>
      <Header />
      <div className="useRef">
        <PreviosStateExample />
        <FocusInput />
      </div>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/view" element={<ContactView />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/update/:id" element={<UpdateContact />} />
        <Route path="/delete/:id" element={<DeleteContact />} />
        <Route path="/about" element={<AboutProject />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export default AfterLogin;
