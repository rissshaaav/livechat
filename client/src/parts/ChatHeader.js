import React from 'react'
import Avatar from '../components/Avatar'
const ChatHeader = ({name}) => {
  return (
    <div className="flex gap-3 p-3 rounded-md shadow bg-white">
      <Avatar status="online">{name[0] || "J"}</Avatar>

      <div className="flex flex-col justify-center">
        <div className="text-xl font-semibold">{name || "John Doe"}</div>
        {/* <div className="text-sm">100 new messages</div> */}
      </div>
    </div>
  )
}

export default ChatHeader