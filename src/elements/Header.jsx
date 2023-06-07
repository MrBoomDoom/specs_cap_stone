import { NavLink } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import AuthContext from "../store/authContext"
// import axios from 'axios'

const Header = () => {
  const {userId, logout} = useContext(AuthContext)

//   useEffect(() => {
//     axios.get('/api/user')
//         .then(res => setUser(res.data))
//         .catch(err => console.log(err))
//   }, [])

  return (
    userId ? (
        <nav className='flex justify-between'>
            <NavLink to='/'>Auth</NavLink>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/addVehicle'>Add a Vehicle</NavLink>
            <button onClick={logout}>Logout</button>
        </nav>
        ) : null
    )
}

export default Header