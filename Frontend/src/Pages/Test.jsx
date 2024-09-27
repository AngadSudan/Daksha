import React from 'react'
import TestCard from '../Components/TestCard/TestCard'
import src from "../Images/Chitkara.svg"
function Test() {
  return (
    <>
      <div className='pt-[7rem] h-[90svh] px-8 w-full flex justify-center'>
        <div className='h-full w-full'>
          <h1 className='text-[32px] mt-8 text-red-600 font-semibold'><u> TEST SCORES </u></h1>
          <div className='flex'>
            <TestCard src={src} paragraph="This is a test scores that i dont know how should i work along with and add" Title="Chitkara Scores" />
            <TestCard src={src} paragraph="This is a test scores that i dont know how should i work along with and add" Title="Chitkara Scores" />
            <TestCard src={src} paragraph="This is a test scores that i dont know how should i work along with and add" Title="Chitkara Scores" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Test