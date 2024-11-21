import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Images/Chitkara.svg'
import {Button} from '../index';
import { GiHamburgerMenu } from "react-icons/gi";
import UserContext from '../../Context/User.context';
function Header() {
  const {login}= useContext(UserContext);
  const [value,setvalue]= useState(false);
  const visible=()=>{
    setvalue(!value);
  }
  return (
    <nav className='w-full h-[6rem] fixed flex justify-evenly py-[1rem] px-auto z-50'>
        <h1 className='w-[30%] text-[32px] font-bold my-auto'> <NavLink to="/"> <h1 className='my-auto'>Daksh</h1> </NavLink> </h1>
        <ul className='hidden sm:flex gap-[3.5rem] text-2xl py-auto my-auto'>
            <li><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'}   to=''>Home</  NavLink></li>
              {login ?<>
                <li><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'}  to="Notes">Notes</NavLink></li>
                <li ><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'} to="Doubts">Doubts</NavLink></li>
                <li><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'} to="Tracker">ATS</NavLink></li>
                </>:<>
                  <button><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'} to="Login"><Button name="Login" /></NavLink></button>
                </>
            }
        </ul>
        <button onClick={visible} className='lg:hidden md:hidden sm:hidden'>
          <GiHamburgerMenu className='text-3xl' />
        </button>
        <div className={` bg-white list-none lg:hidden md:hidden bg-white sm:hidden ${value?"translate-x-0":"translate-x-[300%]"} h-[100svh] fixed top-[5rem] p-8  right-0 z-50 border-gray-300 border-2 w-[22rem] `}>
          {
            !login ?<>
              <div className='h-16 z-[9999] bg-white w-full hover:border-white hover:border-2  '>
                <li><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'}   to='/'>Home</  NavLink></li>
              </div>
              <div className='h-16 z-[9999] bg-white w-full hover:border-white hover:border-2  '>
              <button><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'} to="Login"><Button name="Login" /></NavLink></button>
              </div>
              </>:
              <>
                <div className='h-16 z-[9999] bg-white w-full hover:border-white hover:border-2  '>
                  <li><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'}   to='Home'>Home</  NavLink></li>
                </div>
                <div className='h-16 z-[9999] bg-white w-full hover:border-white hover:border-2  '>
                  <li><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'}  to="Notes">Notes</NavLink></li>
                </div>
                <div className='h-16 z-[9999] bg-white w-full hover:border-white hover:border-2  '>
                  <li ><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'} to="Doubts">Doubts</NavLink></li>
                </div>
                <div className='h-16 z-[9999] bg-white w-full hover:border-white hover:border-2  '>
                  <li><NavLink  className={({ isActive }) =>isActive ? 'text-red-500 text-2xl' : 'text-gray-800'} to="Tracker">ATS</NavLink></li>
                </div>
              </>
          }
        </div>
    </nav>  
)
}

export default Header