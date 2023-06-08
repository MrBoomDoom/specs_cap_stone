import './App.css'
import Header from './elements/Header'
import Home from './pages/Home'
import Auth from './pages/Auth'
import VehicleDetails from './pages/VehicleDetails'
import AddVehicle from './pages/AddVehicle'
import {Routes, Route, Navigate} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from './store/authContext'

function App() {
    const {userId} = useContext(AuthContext)
  console.log(userId)
    return (
        <div>
            <Header/>
            <Routes>
                <Route index element={userId ? <Navigate to='/home'/> : <Auth/>}/>
                <Route path='/home' element={userId ? <Home/> : <Navigate to='/'/>}/>
                <Route path='/addVehicle' element={userId ? <AddVehicle/> : <Navigate to='/'/>}/>
                <Route path='/details/:vehicleId' element={userId ? <VehicleDetails/> : <Navigate to='/'/>}/>
            </Routes>
        </div>
    )
}

export default App