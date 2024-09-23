import Header from './Components/Header/Header'
import './App.css'
import src from './Images/Notes.png'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

function App() {
  

  return (
    <>
     <Header />
     <Outlet/>
     <button>
      <NavLink to="Todo" className='hover:bg-pink-50 hover:scale-110 grid  place-items-center h-[13vh] w-[13vh] rounded-full fixed bottom-10 right-10 border-black border-2'> <img src={src} className='h-[4rem] w-[4rem]' alt="Add Notes" /> </NavLink>
     </button>
    </>
  )
}

export default App
