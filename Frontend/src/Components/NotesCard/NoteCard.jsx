import React from 'react'

function Notes({src, Heading, paragrah}) {
  return (
    <>
      <div className='flex p-8 mt-48 mx-4 border-black border-2 rounded-xl flex-col h-[65%] w-[25%] '>
        <img src={src}  className="mb-16" alt="" />
        <button className=' h-fit border-black border-2 p-4 flex justify-center'>
        <h1 className='mb-2 font-bold text-center text-3xl'>{Heading}</h1></button>
      </div>
    </>
  )
}

export default Notes