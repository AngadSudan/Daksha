import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter, Routes, useLocation } from 'react-router-dom';
import { Landing, Test, Notes, Home,Doubts, Subject, Post } from './Pages/index.js';
import Todo from './Pages/Todo.jsx';
import Login from './Pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: "Home", element: <Home /> },
      { path: "Notes", element: <Notes />,},
      // { path: "SignUp", element: <Notes />,},
      {path:"Subject/:id",element:<Subject />},
      {path:"Subject/:id/upload",element:<Post />},
      { path: "Doubts", element: <Doubts /> },
      { path: "Tracker", element: <Test /> },
    ],
  },
  {
    path: "Todo",
    element: <Todo />,
  },{
    path: "Login", 
    element: <Login />,
  }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
