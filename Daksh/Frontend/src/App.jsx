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
     <NavLink to="Todo" className='
  hover:bg-pink-100 
  hover:scale-110 
  grid 
  z-40 
  bg-pink-50 
  place-items-center 
  
  /* Base size (mobile first) */
  h-[12vh] 
  w-[12vh]
  
  /* Small devices */
  sm:h-[10vh] 
  sm:w-[10vh]
  
  /* Medium devices */
  md:h-[11vh] 
  md:w-[11vh]
  
  /* Large devices */
  lg:h-[12vh] 
  lg:w-[12vh]
  
  rounded-full 
  fixed 
  bottom-10 
  right-10 
  border-black 
  border-2
  transition-all 
  duration-300 
  ease-in-out
  shadow-lg 
  hover:shadow-xl
'>
  <img 
    src={src} 
    className='
      /* Base size (mobile first) */
      h-[2rem] 
      w-[2rem]
      
      /* Small devices */
      sm:h-[2.5rem] 
      sm:w-[2.5rem]
      
      /* Medium devices */
      md:h-[3rem] 
      md:w-[3rem]
      
      /* Large devices */
      lg:h-[3.5rem] 
      lg:w-[3.5rem]
      
      transition-transform 
      duration-300
    ' 
    alt="Add Notes" 
  />
</NavLink>
     </button>
    </UserProvider>
  )
}

export default App
