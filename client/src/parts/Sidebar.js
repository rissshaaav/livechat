import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuUserPlus } from "react-icons/lu";
import { RiGroupLine } from "react-icons/ri";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import Input from "../components/Input";
import SidebarListItem from "../components/SidebarListItem";
// import ChatHeader from "./ChatHeader";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const userData = useSelector((state) => state.userData);
  console.log("userData", userData);
  return (
    <div className="flex flex-col w-full h-full">
      {/* sidebar header */}
      <div className="flex justify-between">
        <FaRegCircleUser size={30} />
        <div className="flex">
          <LuUserPlus size={30} />
          <RiGroupLine size={30} />
          <AiOutlineUsergroupAdd size={30} />
        </div>
      </div>
      {/* sidebar search */}
      <div className="flex items-center gap-5">
        <Input placeholder="Search">
          <IoMdSearch size={30} />
        </Input>
      </div>
      {/* sidebar list */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <SidebarListItem />
        <SidebarListItem />
        <SidebarListItem />
        <SidebarListItem />
        <SidebarListItem />
        <SidebarListItem />
        <SidebarListItem />
      </div>
      {/* sidebar footer */}
      {/* <ChatHeader name={userData.globalUsername}/> */}
      <SidebarListItem name={userData.globalUsername} status={userData.globalEmail}/>
    </div>
  );
};

export default Sidebar;
