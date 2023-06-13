import React from 'react'
import axios from "axios"

const VehicleCard = ({vehicle, getUserVehicles}) => {

    const favVehicle = () => {
        axios.post('/api/addFav', {vehicleId: vehicle.id})
    }

    const deleteVehicle = id => {
        axios.delete(`/api/vehicles/${id}`)
            .then(() => {
                getUserVehicles()
            })
            .catch(err => {
                console.log(err)
            })
    }

    //add user.id

    //TO DO
    //GET USER ID FROM CONTEXT FILE or LOCAL STORAGE

    return (
        <div className='vehicle-card'>
          <img src={vehicle.imageURL}/>
            <div className='vehicle-card-text'>
                <div className='vehicle-card-info'>
                  <h2>{vehicle.brand}</h2> 
                  <h3>{vehicle.name}</h3>
                  <h2>{vehicle.type}</h2>
                </div>
                <div className='vehicle-card-info'>
                  <h2>{vehicle.engine} Engine</h2> 
                  <h2>{vehicle.speed} mph Top Speed</h2>
                </div>
            </div>
                <div className='card-button'>
                    <button>Favorite</button>
                </div>

                <div className='card-button'>
                    <button onClick={() => deleteVehicle(vehicle.id)}>Delete</button>
                </div>
            </div>
            )
        }

export default VehicleCard