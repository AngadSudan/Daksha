import React from 'react'
import TestCard from '../Components/TestCard/TestCard'
import src from "../Images/Chitkara.svg"
import {motion} from "framer-motion"
function Test() {
  return (
    <>
      <div className='pt-[7rem] h-[90svh]  px-8 w-full flex'>
        <motion.div
        className='h-full flex w-full'
        initial={{rotate:-720,scale:0, opacity:0}}
        animate={{rotate:0, opacity:1, scale:1}}
        transition={{duration:2, delay:0.4}}
        >
          <h1 className='text-[32px] mt-8  text-red-600 font-semibold'><u> TEST SCORES </u></h1>
          <div className='lg:flex'>
            <TestCard src={src} paragraph="This is a test scores that i dont know how should i work along with and add" Title="Chitkara Scores" />
            <TestCard src={src} paragraph="This is a test scores that i dont know how should i work along with and add" Title="Chitkara Scores" />
            <TestCard src={src} paragraph="This is a test scores that i dont know how should i work along with and add" Title="Chitkara Scores" />
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Test