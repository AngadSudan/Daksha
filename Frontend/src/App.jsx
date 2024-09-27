import Header from './Components/Header/Header'
import './App.css'
import src from './Images/Notes.png'
import { NavLink } from 'react-router-dom'
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const location = useLocation();
  
  
  return (
    <>
     <Header />
     <AnimatePresence mode="wait"> {/* mode="wait" ensures the exit animation completes before entering */}
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        // exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        >
        <Outlet />
      </motion.div>
    </AnimatePresence>
     <button>
      <NavLink to="Todo" className='hover:bg-pink-100 hover:scale-110 grid z-40 bg-pink-50  place-items-center h-[13vh] w-[13vh] rounded-full fixed bottom-10 right-10 border-black border-2'> <img src={src} className='h-[4rem] w-[4rem]' alt="Add Notes" /> </NavLink>
     </button>
    </>
  )
}

export default App
