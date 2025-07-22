import { Link } from 'react-router-dom'


function Navbar() {
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