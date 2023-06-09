import { NavLink } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import AuthContext from "../store/authContext"


const Header = () => {
  const {userId, logout} = useContext(AuthContext)



  return (
    userId ? (
        <nav className='flex justify-center items-center h-[10vh] bg-[#1fb6ff]'>
            <NavLink to='/home' className='mx-11'>Home</NavLink>
            <NavLink to='/fav' className='mx-11'>Favorites</NavLink>
            <NavLink to='/addVehicle' className='mx-11'>Add a Vehicle</NavLink>
            <button onClick={logout}>Logout</button>
        </nav>
        ) : null
    )
}

export default Header