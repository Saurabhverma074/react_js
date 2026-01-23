import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
     <Header/>
     <Outlet/>

      {/* outlet lagne ke baad sirf middle wala phase change hooga aur saab change nhi hoonge  agar neeche karenge to uper ke change hoonge neeche ke nhi */}
     <Footer/>
    </>
  )
}

export default Layout