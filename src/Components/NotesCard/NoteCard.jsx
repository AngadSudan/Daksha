import React from 'react'
import { NavLink } from 'react-router-dom'
function Notes({src, Heading, path}) {
  return (
    <>
      <div className='flex p-8 mt-48 mx-4 border-black border-2 rounded-xl flex-col h-[65%] w-[25%] '>
        <img src={src}  className="mb-16" alt="" />
        <button className=' h-fit border-black border-2 p-4 flex justify-center'>
          <NavLink to={path} className='text-center'>
            <h1 className='mb-2 font-bold text-center text-3xl'>{Heading}</h1>
          </NavLink>
        </button>
      </div>
    </>
  )
}

export default Notes