import React from 'react'
import { NavLink } from 'react-router-dom'
function Notes({src, Heading, path,description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.'}) {
  return (
    <div className='w-full h-fit p-8 '>
      <div className='flex md:hidden p-4 mx-auto border-black border-2 rounded-xl flex-col h-[20%] w-[60%] '>
        <img src={src}  className="mb-16" alt="" />
        <button className=' h-fit border-black border-2 p-4 flex justify-center'>
          <NavLink to={path} className='text-center'>
            <h1 className='mb-2 font-bold text-center text-3xl'>{Heading}</h1>
          </NavLink>
        </button>
      </div>
      <div className='md:flex md:gap-[10%] hidden p-8 border-black border-2 rounded-xl h-[17rem] w-[80%] mx-auto'>
        <img src={src}  className="mb-16" alt="" />
        <div>
          <h1 className='mb-2 ml-14 font-bold text-left text-3xl'>{Heading}</h1>
          <p className='h-[40%] text-xl text-wrap '>{description}</p>
          <button className=' h-fit underline p-4 flex justify-center'>
            <NavLink to={path} className='text-center'>
              <h1 className=' font-semibold text-center text-xl'>Dive into concepts</h1>
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Notes