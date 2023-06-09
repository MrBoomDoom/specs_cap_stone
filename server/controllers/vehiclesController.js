const { Vehicle } = require("../models/vehicle")
const {User} = require("../models/user")

module.exports = {
    addNewVehicle: async (req, res) => {
        try {
            const { imageURL, name, type, speed, brand, engine, userId} =
                req.body

            const newVehicle = await Vehicle.create({
                imageURL,
                name,
                type,
                speed,
                brand,
                engine,
                userId
            })

            res.sendStatus(200)
        } catch (theseHands) {
            console.log(theseHands)
            res.status(500).send("Failed to add Vehicle")
        }
    },

    deleteVehicle: async (req, res) => {
        try {
            const {id} = req.params
            await Vehicle.destroy({where: {id: +id}})
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR IN getCurrentUserPosts')
            console.log(error)
            res.sendStatus(400)
        }
    },


    //TO DO
    //CREATE ADD FAV FUNCTION
    //VEHICLE FAV.CREATE(REQ.BODY)

    getUserVehicles: async (req, res) => {
        try {
            const {userId} = req.params

        const vehicles = await Vehicle.findAll({
                include: [
                    {
                        model: User,
                        attributes: ["username", "id"],
                        where: { id: userId }
                    },
                ]
            })
        res.status(200).send(vehicles)
        } catch(err){
            console.log(err)
            res.sendStatus(500)
        }
    }
}