import './App.css'
import Header from './elements/Header'
import Home from './pages/Home'
import Auth from './pages/Auth'
import VehicleDetails from './pages/VehicleDetails'
import AddVehicle from './pages/AddVehicle'
import {Routes, Route} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from './store/authContext'

function App() {
    const {userId} = useContext(AuthContext)
  console.log(userId)
    return (
        <div>
            <Header/>
            <Routes>
                <Route index elements={<Auth/>}/>
                <Route path='/home' elements={<Home/>}/>
                <Route path='/addVehicle' elements={<AddVehicle/>}/>
                <Route path='/details/:vehicleId' elements={<VehicleDetails/>}/>
            </Routes>

        </div>
    )
}

export default App