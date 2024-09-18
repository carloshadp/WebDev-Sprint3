import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.jsx';
import Registrar from './pages/Registrar.jsx';
import Circuitos from './pages/Circuitos.jsx';

const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path:"/register",
        element:<Registrar/>,
      },
      {
        path: "/circuitos",
        element: <Circuitos/>
      }
    ]
  }
])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Rotas}/>
  </StrictMode>,
)
