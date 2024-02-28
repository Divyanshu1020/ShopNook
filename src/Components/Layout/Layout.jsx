import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Loading from '../Loading'

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loading/>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  )
}