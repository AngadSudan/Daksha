import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Images/Chitkara.svg'
import {Button} from '../index';
import UserContext from '../../Context/User.context';
function Header() {
  const {login}= useContext(UserContext);
  return (
    <nav className='w-full h-[6rem] fixed bg-slate-50 flex justify-evenly py-[1rem] border-b-2 px-auto shadow-lg '>
        <h1 className='w-[40%] text-[32px] font-bold my-auto'> <NavLink to="/"> <div className='flex'><img src={logo} className='h-[5rem] w-[10rem]' /> <h1 className='my-auto'>Daksh</h1> </div> </NavLink> </h1>
        <ul className='flex justify-evenly w-[50%] pt-4'>
            <li><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'}   to='Home'>Home</  NavLink></li>
              {login ?<>
                <li><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'}  to="Notes">Notes</NavLink></li>
                <li ><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'} to="Doubts">Doubts</NavLink></li>
                <li><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'} to="Tracker">ATS</NavLink></li>
                </>:<>
                  <li ><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'} to="Login"><Button name="Login" /></NavLink></li>
                  <li><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'} to="SignUp"><Button name="Signup" /></NavLink></li>
                  </>
            }
        </ul>
    </nav>
  )
}

export default Header