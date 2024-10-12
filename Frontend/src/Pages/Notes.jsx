import React from 'react'
import src from '../Images/Chitkara.svg'
import {  NoteCard } from '../Components'
import {motion} from "framer-motion"
function Notes() {
  return (
    <>
      <motion.div
       className='pt-7rem h-[90svh] w-full flex'
       initial={{x:"-100%", opacity:0}}
       animate={{x:0, opacity:1}}
       transition={{delay:0.7, duration:1, staggerChildren:1}}
       >
        <NoteCard src={src} path='/Subject/MCP' Heading="MCP" />
        <NoteCard src={src} path='/Subject/FEE' Heading="FEE" />
        <NoteCard src={src} path='/Subject/CASA' Heading="CASA" />
        <NoteCard src={src} path='/Subject/PYTHON' Heading="Python" />
      </motion.div>
    </>
  )
}

export default Notes;