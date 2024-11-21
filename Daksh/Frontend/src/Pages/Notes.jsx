import React from 'react'
import src from '../Images/Chitkara.svg'
import {  NoteCard } from '../Components'
import {motion} from "framer-motion"
function Notes() {
  return (
    <>
      <motion.div
       className='pt-[8rem] bg-[#ffe8c1] h-fit w-full flex flex-wrap'
       initial={{x:"-100%", opacity:0}}
       animate={{x:0, opacity:1}}
       transition={{delay:0.7, duration:1, staggerChildren:1}}
       >
        {/* describe about the notes section   */}
        <div className='bg-gradient-to-r w-[80%] h-[15rem] mx-auto from-[#c0ffff] via-[#e0ffff] to-transparent'>
          <img/>
          <div></div>
        </div>
        <NoteCard src={src} path='/Subject/MCP' Heading="MCP" />
        <NoteCard src={src} path='/Subject/FEE' Heading="FEE" />
        <NoteCard src={src} path='/Subject/CASA' Heading="CASA" />
        <NoteCard src={src} path='/Subject/PYTHON' Heading="Python" />
      </motion.div>
    </>
  )
}

export default Notes;