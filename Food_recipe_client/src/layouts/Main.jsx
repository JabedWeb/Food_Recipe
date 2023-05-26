/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../pages/shared/Header/Header'
import { Footer } from '../pages/shared/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Main = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
    </div>
  )
}

export default Main