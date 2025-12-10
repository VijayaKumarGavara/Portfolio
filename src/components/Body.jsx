import {  Outlet  } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Body= () => {
  return (
    <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Body;