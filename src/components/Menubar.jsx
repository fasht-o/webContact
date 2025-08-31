import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";

const Menubar = () => {
  return (
    <div className="fixed bottom-2">
      <div className="text-white flex flex-row border-[1px] w-screen justify-between">
        <div>
          <IoPersonOutline
            size="30px"
            className="cursor-pointer hover:opacity-40"
          />
          <h3 className="text-xs">Contact</h3>
        </div>
        <div>
          <FaRegStar size="30px" className="cursor-pointer hover:opacity-40" />
          <h3 className="text-xs">Starred</h3>
        </div>
        <div>
          <FaHistory size="30px" className="cursor-pointer hover:opacity-40" />
          <h3 className="text-xs">History</h3>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
