import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'
import { useNavigate } from 'react-router-dom'

const AddVehicle = () => {
    const [imageURL, setImage] = useState('')
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [speed, setSpeed] = useState('')
    const [brand, setBrand] = useState('')
    const [engine, setEngine] = useState('')
    const {userId} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmitForm = e => {
        e.preventDefault()
        const body = {
          imageURL,
          name,
          type,
          speed,
          brand,
          engine,
          userId
        }

        axios.post('/api/vehicles', body)
        .then(res => { console.log(res.data)
        navigate('/home')})
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <div className='background'>
                    <div className='add-box'>
                        <input placeholder='Image' onChange={e => setImage(e.target.value)} />
                        <input placeholder='Name' onChange={e => setName(e.target.value)} />
                        <input placeholder='Brand' onChange={e => setBrand(e.target.value)} />
                        <input placeholder='Type of vehicle' onChange={e => setType(e.target.value)} />
                        <input placeholder='Speed' onChange={e => setSpeed(e.target.value)} />
                        <input placeholder='Engine' onChange={e => setEngine(e.target.value)} />
                        <button>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddVehicle