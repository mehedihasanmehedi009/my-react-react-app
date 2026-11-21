import React from 'react'
import { Heder } from '../Heder/Heder'
import { Outlet } from 'react-router'
import { Footer } from '../Footer/Footer'

export const Root = () => {
  return (
    <>
    <Heder/>
    <Outlet/>
    <Footer/>
    </>
  )
}
