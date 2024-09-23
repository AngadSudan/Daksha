import Header from './Components/Header/Header'
import './App.css'
import { Outlet } from 'react-router'

function App() {
  

  return (
    <>
     <Header />
     <Outlet/>
     <a className=' grid  place-items-center h-[10vh] w-[10vw] rounded-full fixed bottom-5 right-5 border-black border-2'> <img src="./images/pen.png" alt="Add Notes" /></a>
    </>
  )
}

export default App
