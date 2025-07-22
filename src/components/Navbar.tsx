import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

function Navbar({}: Props) {
  return (
    <>
    <nav className="bg-white shadow-md">
     <Link to={"/"}>
    Home
     </Link>
     <br />
     <Link to={"/dashboard"}>
     dashboard
     </Link>
    </nav>
    </>
    
  )
}

export default Navbar