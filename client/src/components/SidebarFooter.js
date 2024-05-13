import React from "react";
import Avatar from "./Avatar";
import { LuLogOut } from "react-icons/lu";
import {useNavigate} from "react-router-dom";

const SidebarFooter = ({name, status}) => {
    const navigate = useNavigate();
    const logoutLogic = () => {
        localStorage.removeItem("jwtFromClient");
        navigate("/login");
    };
  return (
    <div className="flex items-center gap-3 p-3 mt-3 rounded-md shadow">
      <Avatar status="online">{name? name[0].toUpperCase() : "J"}</Avatar>

      <div className="flex flex-col justify-center">
        <div className="text-lg">{name? name : "Jhon Doe"}</div>
        <div className="text-sm">{status? status : "10 new messages"}</div>
      </div>
      <div className="w-fit" onClick={logoutLogic}>
        <LuLogOut size={30} />
      </div>
    </div>
  );
};

export default SidebarFooter;
