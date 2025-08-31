// Contacts.jsx
import React, { useContext } from "react";
import { ContactContext } from "../App";
import { IoMdPersonAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  const { submittedData } = useContext(ContactContext);
  console.log(submittedData);
  return (
    <div className="text-white">
      <div className="flex justify-center">
        <h2 className="text-xl font-bold mb-4 "> Contacts </h2>
      </div>

      {submittedData.length > 0 ? (
        submittedData.map((contact, index) => (
          <div
            key={index}
            className="mb-4 border-b border-white pb-4 flex justify-between"
          >
            <p>
              {contact.firstName} {contact.lastName}
            </p>

            <p>{contact.tel}</p>
          </div>
        ))
      ) : (
        <p className="text-xl">No contact data has been submitted yet.</p>
      )}
      <div className="flex justify-center mt-[550px] cursor-pointer">
        <IoMdPersonAdd
          size="30px"
          className="cursor-pointer"
          onClick={() => {
            navigate("/newcontact");
          }}
        />
      </div>
    </div>
  );
};

export default Contacts;
