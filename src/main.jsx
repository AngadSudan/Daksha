import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter, Routes, useLocation } from 'react-router-dom';
import { Landing, Test, Notes, Home,Doubts, Subject } from './Pages/index.js';
import Todo from './Pages/Todo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: "Home", element: <Home /> },
      { path: "Notes", element: <Notes />,},
      {path:"CASA",element:<Subject />},
      {path:"MCP",element:<Subject />},
      {path:"FEE",element:<Subject />},
      {path:"PYTHON",element:<Subject />},
      { path: "Doubts", element: <Doubts /> },
      { path: "Tests", element: <Test /> },
    ],
  },
  {
    path: "Todo",
    element: <Todo />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
