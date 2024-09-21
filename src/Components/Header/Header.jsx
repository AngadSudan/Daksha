import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className='w-full h-[7rem] fixed flex justify-evenly pt-12 border-b-2 px-auto shadow-lg '>
        <h1 className='w-[40%] text-[32px] font-bold my-auto'> <NavLink to="/">Daksha</NavLink> </h1>
        <ul className='flex justify-evenly w-[50%] pt-4'>
            <li><NavLink className="hover:font- "  to=''>Home</  NavLink></li>
            <li><NavLink to="Notes">Notes</NavLink></li>
            <li ><NavLink to="Doubts">Doubts</NavLink></li>
            <li><NavLink to="Tests">Tests</NavLink></li>
        </ul>
    </nav>
  )
}

export default Header