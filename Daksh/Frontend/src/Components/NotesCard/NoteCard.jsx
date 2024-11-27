import React from 'react'
import { NavLink } from 'react-router-dom'
function Notes({src, Heading, path,description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.'}) {
  return (
    <div className='w-full  lg:w-[75%] rounded-xl mx-auto h-fit p-8  '>
      <div className='  flex md:hidden border-2 border-[#faae2b] p-4 mx-auto rounded-xl flex-col h-[20%] w-[60%] '>
        <img src={src}  className="mb-2 h-[80%] w-auto" alt="" />
        <button className=' h-fit border-black border-2 p-4 flex justify-center'>
          <NavLink to={path} className='text-center h-12 w-fit p-2 bg-orange-500 text-white'>
            <h1 className='mb-2 font-bold text-center text-3xl'>{Heading}</h1>
          </NavLink>
        </button>
      </div>
      <div className='md:flex md:gap-[10%] hidden p-8  border-[#faae2b]  border-2 rounded-xl h-[17rem] w-[80%] mx-auto'>
        <img src={src}  className="mb-2" alt="" />
        <div>
          <h1 className='mb-2 ml-14 font-bold text-left text-3xl'>{Heading}</h1>
          <p className='h-[40%] text-xl text-wrap '>{description}</p>
          <button className=' h-fit underline underline-offset-4 decoration-orange-500 p-4 flex justify-center'>
            <NavLink to={path} className='text-center'>
              <h1 className=' font-semibold h-12 w-fit p-2 rounded-xl bg-orange-500 text-white text-center text-xl'>Dive into concepts</h1>
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Notes