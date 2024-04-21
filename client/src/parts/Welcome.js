import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Chats from '../pages/Chats'

const Welcome = () => {
  return (
    <div className='flex-[0.7] flex justify-center items-center bg-green-50 rounded-lg border-green-500 border-b-4'>
        {/* <Home/> */}
        {/* <Login/> */}
        <Chats/>
    </div>
  )
}

export default Welcome