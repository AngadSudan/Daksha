import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider,createRoutesFromElements , createBrowserRouter } from 'react-router-dom'
import {Home,Landing,Test,Notes} from './Pages/index.js'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path="Home" element={<Landing/>} />
      <Route path="Notes" element={<Notes />} />
      <Route path="Doubts" element={<Test />} />
      <Route path="Tests" element={<Test />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
