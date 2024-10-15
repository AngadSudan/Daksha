import React, { useContext } from 'react'
import UserContext from '../Context/User.context'
function Subject() {
  const {Admin}=useContext(UserContext);
  return (
    <>
    <div>Subject</div>
    {Admin && 
      <button className='h-[4rem] w-[4rem] grid place-items-center rounded-full border-2 border-gray-500 fixed bottom-[10rem] right-[3.5rem]'>
        ➕
      </button>
    }
    </>
  )
}

export default Subject