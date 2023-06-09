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
        <div className='h-[450px] w-[300px] border-solid border border-color-primary rounded-2xl flex flex-col justify-center items-center'>
            <img src={vehicle.imageURL}/>
            <h3>{vehicle.name}</h3>
            <h2>{vehicle.speed}mph top speed</h2>
            <h2>{vehicle.brand}</h2>
            <h2>{vehicle.engine}</h2>

                <div className='h-[20px] w-[80px] border-solid border border-color-primary rounded-3x1 flex justify-center items-center'>
                    <button>Favorite</button>
                </div>

                <div className='h-[20px] w-[70px] border-solid border border-color-primary rounded-3x1 flex justify-center items-center'>
                    <button onClick={() => deleteVehicle(vehicle.id)}>delete</button>
                </div>

            </div>
            )
        }

export default VehicleCard