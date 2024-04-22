import React from "react";
import OwnMessage from "../components/OwnMessage";
import OtherPersonMessage from "../components/OtherPersonMessage";
import MessageInput from "../components/MessageInput";
import { VscSend } from "react-icons/vsc";
import ChatHeader from "../parts/ChatHeader";

const Chats = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto no-scrollbar py-3">
        <OtherPersonMessage />
        <OwnMessage />
      </div>

      <div className="flex gap-2 items-center">
        <MessageInput />
        <VscSend size={40} />
      </div>
    </div>
  );
};

export default Chats;
