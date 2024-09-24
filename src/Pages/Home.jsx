import React from 'react'
import src from '../Images/Daksh_Home1.jpg'
import sr1 from '../Images/Daksh_Home2.jpg'
import sr2 from '../Images/Daksh_Home3.jpg'

function Home() {
  return (
    <>
      <div className='pt-[6.4rem] flex mb-[5rem]'>
        <img src={src} className='h-[82.5svh] mt-4' />
        <div className='h-fit'>
          <div className='mt-16 mb-32'>
            <h1 className='text-9xl text-red-500 font-bold text-center'>DAKSH</h1>
            <h1 className='text-9xl text-black leading-8 ml-32 font-bold text-center'>NOTES</h1>
          </div>
          <div className='float-end m-auto'>
            <p className='text-3xl ml-56 text-left border-l-4 w-[70%] pl-8 border-green-400 rounded-md font-semibold '>A Platform for Organising Study Material</p>
          </div>
        </div>
      </div>
      <div className='h-[100svh] w-full p-32 flex bg-about bg-[80%] bg-contain bg-no-repeat'>
         <div className='flex flex-col h-full w-full '>
          <h1 className='text-6xl font-semibold mb-8 text-red-600 '>ABOUT DAKSH</h1>
          <p className='w-[45%] text-left text-xl'>Daksh is an innovative note-taking platform developed by students of Chitkara University. It is designed to help users efficiently manage their notes, organize to-do lists, and analyze test scores. With a user-friendly interface and powerful features, Daksh aims to enhance productivity and streamline academic tasks for students.Daksh includes advanced search capabilities, enabling users to quickly find specific notes or tasks. With its robust security measures, students can trust that their data is safe and protected.</p>
         </div>
         
      </div>
    </>
  )
}

export default Home