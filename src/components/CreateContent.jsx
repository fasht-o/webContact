import React, { useContext } from "react";
import { TiPlusOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const CreateContent = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end flex-row mr-10 cursor-pointer">
      <TiPlusOutline
        size="30px"
        color="white"
        onClick={() => {
          navigate("/newcontact");
          addContact();
        }}
      />
      <p className="text-white">Create Contact</p>
    </div>
  );
};

export default CreateContent;
