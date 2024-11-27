import React, { useState , useEffect} from 'react'
import src from '../Images/CASA.png'
import MCP from '../Images/MCP.png'
import FEE from '../Images/React.webp'
import Python from '../Images/Python.webp'
import {  NoteCard } from '../Components'
import {motion} from "framer-motion"
import { use } from 'framer-motion/client'
function Notes() {
  const [RandomQuote,setRandomQoute]= useState('')
  const getQuote=async()=>{
    await fetch('https://favqs.com/e75a0e531d6d448db5dafbc4d5cdc587/qotd')
    .then(res => res.json())
    .then(data => setRandomQoute(data.quote.body))
    .catch((err)=>{console.log(err); setRandomQoute('When live gives you lemon, make a lemonade')});

    // console.log(RandomQuote);
  }
  useEffect(() => {
    getQuote();
  })
  return (
    <>
      <motion.div
       className='bg-[#ffe8c1] h-fit w-full flex flex-wrap'
       initial={{x:"-100%", opacity:0}}
       animate={{x:0, opacity:1}}
       transition={{delay:0.7, duration:1, staggerChildren:1}}
       >
        <div className='w-full h-fit p-8'>
          <h1 className='text-center mx-auto text-4xl text-wrap md:text-6xl font-bold'>Notes</h1>
        <div className='w-[80%] h-fit p-4 mx-auto md:text-3xl text-center mt-4 font-semibold'>
          <h1>Daily Dose Of Motivation</h1>
          <blockquote className="mt-[2rem] border-l-4 pl-4 italic">
            <p> " {RandomQuote} "</p>
          </blockquote>
        </div>
        </div>
        {/* describe about the notes section   */}
        <NoteCard src={MCP} path='/Subject/MCP' description='Physics is theoretical but the Fun is Real!' Heading="MCP" />
        <NoteCard src={FEE} path='/Subject/FEE' description='A Good plan includes a good UI' Heading="FEE" />
        <NoteCard src={src} path='/Subject/CASA' description='Any Equation means Nothing to me Unless it expresses a thought of God ' Heading="CASA" />
        <NoteCard src={Python} path='/Subject/PYTHON' description='First Solve the Problem Then write the Code' Heading="Python" />
      </motion.div>
    </>
  )
}

export default Notes;