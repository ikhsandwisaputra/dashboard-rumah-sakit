import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '~/components/Navbar'
type Props = {}

function PublicLayout({}: Props) {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default PublicLayout