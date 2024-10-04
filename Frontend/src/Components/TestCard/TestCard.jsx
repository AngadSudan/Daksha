import React from 'react'

function TestCard({src, Title, paragraph}) {
  return (
    <div className='h-[40%] lg:w-[30%] w-full mx-4 my-8  p-4  '>
        <img src={src} alt="" />
        <h1 className='text-3xl font-bold text-center my-4'>{Title}</h1>
        <p className='text-xl text-center'>{paragraph}</p>
    </div>
  )
}

export default TestCard