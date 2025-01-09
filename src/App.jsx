
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Layout from './components/Layout/Layout'
import Portfolio from './components/Portfolio/Portfolio'

function App() {
  const router = createHashRouter([
    {path: '/' , element: <Layout/>, children:[
      {index:true, element: <Home/>},
      {path: 'home' , element: <Home/>},
      {path: 'about' , element: <About/>},
      {path: 'portfolio' , element: <Portfolio/> },
      {path: 'contact' , element: <Contact/>}
    ]}
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
