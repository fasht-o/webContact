import React, { useState, createContext, useEffect } from "react";
import { useContext } from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import { ContactContext } from "../App";
import { useNavigate } from "react-router-dom";

const NewProfile = () => {
  const { submittedData, setSubmittedData } = useContext(ContactContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
  });
  const navigate = useNavigate("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(localStorage);
  };
  const handleSubmit = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.tel
    ) {
      alert("Please fill in all fields!");
      return;
    }

    const updatedData = [...submittedData, formData]; // 👈 this is valid
    setSubmittedData(updatedData); // update state
    localStorage.setItem("submittedData", JSON.stringify(updatedData));

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
    });
  };
  return (
    <div className="text-white">
      <form className="flex flex-col gap-6" id="contact">
        <input type="file" accept="image/*" id="image" />
        <label for="image" className="">
          <MdOutlineCameraAlt />
        </label>
        <label for="firstName" className="">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          placeholder="Enter Your First Name"
          className="border border-white"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <label for="LastName" className="">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          placeholder="Enter Your Last Name"
          className="border border-white"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <label for="Email" className="">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="Enter Your Email Adress"
          className="border border-white"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <label for="tel" className="">
          Telephone No:
        </label>
        <input
          type="tel"
          id="tel"
          name="tel"
          value={formData.tel}
          placeholder="Enter Your Telephone No:"
          className="border border-white"
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </form>
      <button
        className="border-[1px] px-4 py-1 mt-[30px] hover:bg-white hover:opacity-50 hover:text-black cursor-pointer"
        value="contact"
        onClick={() => {
          handleSubmit();
          if (
            formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.tel
          ) {
            navigate("/contact");
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default NewProfile;
