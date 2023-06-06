require('dotenv').config()
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const {SERVER_PORT, SECRET} = process.env

const {sequelize} = require('./util/database')
const {User} = require('./models/user')
const {Vehicle} = require('./models/vehicle')
const {VehicleFav} = require('./models/vehicleFav')

User.hasMany(Vehicle)
Vehicle.belongsTo(User)

Vehicle.hasMany(VehicleFav)
VehicleFav.belongsTo(Vehicle)

User.hasMany(VehicleFav)
VehicleFav.hasMany(User)

const {register, login, checkUser} = require('./controllers/authController')

const app = express()

app.use(express.json())
app.use(cors())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 48
    }
}))

app.post('/api/register', register)
app.post('/api/login', login)
app.get('/api/user', checkUser)

sequelize.sync({force:true})
    .then(() => app.listen(SERVER_PORT, console.log(`Never gonna give you up ${SERVER_PORT}`)))
    .catch(err => console.log(err))