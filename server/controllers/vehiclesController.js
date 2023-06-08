const { Vehicle } = require("../models/vehicle")
// const { BookTopic } = require("../models/bookTopic")

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