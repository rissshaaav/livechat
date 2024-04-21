import React from "react";
import Avatar from "./Avatar";

const SidebarListItem = () => {
  return (
    <div className="flex gap-3 p-3 mt-3 rounded-md shadow">
      <Avatar status="online">J</Avatar>

      <div className="flex flex-col justify-center">
        <div className="text-lg">John Doe</div>
        <div className="text-sm">100 new messages</div>
      </div>
    </div>
  );
};

export default SidebarListItem;
