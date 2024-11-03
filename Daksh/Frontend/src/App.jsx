import Header from './Components/Header/Header'
import './App.css'
import UserProvider from './Context/User.provider'
import src from './Images/Notes.png'
import { NavLink } from 'react-router-dom'
import { Outlet} from 'react-router-dom';
import {motion } from "framer-motion"

function App() {
  return (
    <UserProvider >
     <Header />
      <motion.div>
        <Outlet />
      </motion.div>
     <button>
      <NavLink to="Todo" className='hover:bg-pink-100 hover:scale-110 grid z-40 bg-pink-50  place-items-center h-[13vh] w-[13vh] rounded-full fixed bottom-10 right-10 border-black border-2'> <img src={src} className='h-[4rem] w-[4rem]' alt="Add Notes" /> </NavLink>
     </button>
    </UserProvider>
  )
}

export default App
