import React from 'react'
import Avatar from '../components/Avatar'
const ChatHeader = () => {
  return (
    <div className="flex gap-3 p-3 rounded-md shadow bg-white">
      <Avatar status="online">J</Avatar>

      <div className="flex flex-col justify-center">
        <div className="text-xl font-semibold">John Doe</div>
        {/* <div className="text-sm">100 new messages</div> */}
      </div>
    </div>
  )
}

export default ChatHeader