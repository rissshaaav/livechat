import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuUserPlus } from "react-icons/lu";
import { RiGroupLine } from "react-icons/ri";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import Input from "../components/Input";
import SidebarListItem from "../components/SidebarListItem";

const Sidebar = () => {
  return (
    <div className="flex-[0.3] flex flex-col">
      <div className="flex justify-between">
        <FaRegCircleUser size={30} />
        <div className="flex">
          <LuUserPlus size={30} />
          <RiGroupLine size={30} />
          <AiOutlineUsergroupAdd size={30} />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Input placeholder="Search">
          <IoMdSearch size={30} />
        </Input>
      </div>
      <div className="flex-1 overflow-y-auto">
        <SidebarListItem />
        <SidebarListItem />
        <SidebarListItem />
        <SidebarListItem />
        <SidebarListItem />
        <SidebarListItem />
        <SidebarListItem />
      </div>
    </div>
  );
};

export default Sidebar;
