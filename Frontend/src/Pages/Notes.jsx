import React from 'react'
import src from '../Images/Chitkara.svg'
import { Header, NoteCard } from '../Components'

function Notes() {
  return (
    <>
      <div className='pt-7rem h-[90svh] w-full flex justify-center'>
        <NoteCard src={src} Heading="MCP" />
        <NoteCard src={src} Heading="FEE" />
        <NoteCard src={src} Heading="CASA" />
        <NoteCard src={src} Heading="Python" />
      </div>
    </>
  )
}

export default Notes