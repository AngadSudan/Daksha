import React from 'react'
import {Header} from '../Components/index'
function Landing() {
  return (
    <>
      <Header/>
      <div className='h-[100svh] w-screen grid place-items-center'>
        <div >
            <div>
                <h1 className='text-3xl mb-2 font-bold text-center'>Daksha</h1>
                <h1 className='text-xl font-semibold text-center'>" A Platoform for Organising Study Material "</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Landing