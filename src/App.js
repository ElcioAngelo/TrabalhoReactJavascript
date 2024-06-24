import './App.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/paginaLogin'
import Home from './pages/home'
import Information from './pages/information'
function App(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/home",
      element: <Home/>
    },
    {
      path: "/pokemon/:id",
      element: <Information/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App 
