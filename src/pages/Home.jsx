import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'
import VehicleCard from '../elements/VehicleCard'


const Home = () => {
    const [vehicles, setVehicles] = useState([])
    const {userId} = useContext(AuthContext)

    const getUserVehicles = () => {
        axios.get(`/api/vehicles/${userId}`)
            .then(res => {
                console.log(res.data)
                setVehicles(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getUserVehicles()
    }, [])

    return (
        <div>
            {vehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle} getUserVehicles={getUserVehicles}/>)}

        </div>
    )
}

export default Home