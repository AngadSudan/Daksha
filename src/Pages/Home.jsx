import React from 'react'
import src from '../Images/Daksh_Home1.jpg'
function Home() {
  return (
    <>
      <div className='pt-[6.4rem] flex'>
        <img src={src} className='h-[82.5svh]' />
        <div className='h-fit'>
          <div className='mt-16 mb-32'>
            <h1 className='text-9xl text-red-500 font-bold text-center'>DAKSH</h1>
            <h1 className='text-9xl text-black leading-8 ml-32 font-bold text-center'>NOTES</h1>
          </div>
          <div className='float-end m-auto'>
            <p className='text-3xl ml-56 text-left border-l-4 w-[70%] pl-8 border-green-400 rounded-md font-semibold '>A Platform for Organising Study Material</p>
          </div>
        </div>
      </div>
      <div className='h-[100svh] w-full'></div>
    </>
  )
}

export default Home