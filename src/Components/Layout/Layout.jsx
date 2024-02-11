import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={ <h1>Looding</h1>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  )
}
