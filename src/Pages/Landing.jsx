import React from 'react'
import {Header} from '../Components/index'
import Spline from '@splinetool/react-spline';
function Landing() {
  return (
    <div className='  h-[100svh] overflow-hidden'  >
      <Header />
      <div className='h-[110svh] w-screen overflow-y-hidden mx-auto bg-dune'>
        <Spline scene="https://prod.spline.design/DOH6lpVbqOdAyIyX/scene.splinecode" />
    </div>
    </div>
  )
}

export default Landing;