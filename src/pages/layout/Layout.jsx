import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Layout = () => {
  return (
    <div>
        <main>
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
    </div>
  )
}

export default memo(Layout)