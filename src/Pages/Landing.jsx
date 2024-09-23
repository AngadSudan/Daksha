import React from 'react'
import {Header} from '../Components/index'
import { UseSlideChild, } from '../GsapAnimations/Animations'
function Landing() {
  const SlideChildRef= UseSlideChild();
  return (
    <div className='bg-gradient-to-r from-pink-100 via-zinc-100 to-pink-100 animate-gradient'>
      <Header />
      <div className='h-[100svh] w-screen grid place-items-center'>
        <div >
            <div ref={SlideChildRef}>
                <h1  className='text-3xl mb-2 font-bold text-center'>Daksha</h1>
                <h1  className='text-xl font-semibold text-center'>" A Platform for Organising Study Material "</h1>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Landing;