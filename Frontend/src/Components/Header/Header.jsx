import React from 'react'
import logo from '../../Images/Chitkara.svg'
function Header() {
  return (
    <nav className='w-full z-50 h-[6rem] fixed bg-slate-50 flex justify-evenly py-[1rem] border-b-2 px-auto shadow-lg '>
        <h1 className='w-[40%] text-[32px] font-bold my-auto'> <div className='flex'><img src={logo} className='h-[5rem] w-[10rem]' /> <h1 className='my-auto'>Daksh</h1> </div>  </h1>
        <ul className='flex justify-evenly w-[50%] pt-4'>
            <li><a  href='Pages/Doubts.jsx'>Home</  a></li>
            <li><a  href="Notes">Notes</a></li>
            <li ><a  href="Doubts">Doubts</a></li>
            <li><a  href="Tests">Tests</a></li>
        </ul>
    </nav>
  )
}

export default Header;