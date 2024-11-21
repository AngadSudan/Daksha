import React from 'react'
import {Header} from '../Components/index'
import Spline from '@splinetool/react-spline';
import IITD from '../Images/IITD.png'
import BITSPILANI from '../Images/BITSPILANI.png'
import uov from '../Images/uov.png'
import VIT from '../Images/VIT.png'
import frms from '../Images/frms.png'
import { AnimatedTooltip } from '../Components/ui/animated-tooltip';
// import { InfiniteMovingCards } from '../Components/ui/infinite-moving-cards';
function Landing() {
  const items= [{id:1,name:'IIT DELHI',image:IITD},{id:2,name:'BITS PILANI',image:BITSPILANI},{id:3,name:'University of Virginia',image:uov},{id:4,name:'VIT',image:VIT},{id:5,name:'FRMS',image:frms}]
  
  return (
    <div className='h-[100svh]'>
      <Header />
      <div className='h-[100svh] w-screen bg-[#E0FFFF]' />
      <div className='w-fullh-fit p-8 '>
        <h1 className='text-center text-4xl font-bold '>Our Partners</h1>
        <div className='w-[90%] -z-10 h-fit p-8 mx-auto md:flex '>
          <AnimatedTooltip  items={items} />
        </div>
      </div>
      <div>
      {/* <InfiniteMovingCards  items={testimonials} direction='right' speed='slow'  /> */}
      </div>
      <div className='h-[100svh] w-screen bg-[#E0FFFF]' />
    </div>
  )
}

export default Landing;