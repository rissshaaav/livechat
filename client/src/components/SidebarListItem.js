import React from "react";
import Avatar from "./Avatar";

const SidebarListItem = ({name, status}) => {
  return (
    <div className="flex gap-3 p-3 mt-3 rounded-md shadow">
      <Avatar status="online">{name? name[0] : "J"}</Avatar>

      <div className="flex flex-col justify-center">
        <div className="text-lg">{name? name : "Jhon Doe"}</div>
        <div className="text-sm">{status? status : "10 new messages"}</div>
      </div>
    </div>
  );
};

export default SidebarListItem;
