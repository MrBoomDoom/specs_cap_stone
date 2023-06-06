const { Vehicle } = require("../models/vehicle")
// const { BookTopic } = require("../models/bookTopic")

module.exports = {
    addNewVehicle: async (req, res) => {
        try {
            const { imageURL, type, speed, brand, engine, priority, userId} =
                req.body

            const newVehicle = await Vehicle.create({
                imageURL,
                type,
                speed,
                brand,
                engine,
                priority,
                userId
            })

            topics.forEach(async id => {
                await BookTopic.create({ vehicleId: newVehicle.id, topicId: id })
            })

            res.sendStatus(200)
        } catch (theseHands) {
            console.log(theseHands)
            res.status(500).send("Vehicle failed to add")
        }
    }
}