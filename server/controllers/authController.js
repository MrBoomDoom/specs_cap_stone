const {User} = require('../models/user')
const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        console.log('hit register', req.session)
        try{
            const {username, password} = req.body

            let foundUser = await User.findOne({where: {username}})
            if(foundUser){
                res.status(400).send("Username taken.")
            } else {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)

                const newUser = await User.create({
                    username,
                    hashedPass: hash
                })

                req.session.user = {
                    userId: newUser.dataValues.id,
                    username: newUser.dataValues.username
                }

                res.status(200).send(req.session.user)
            }
        } catch(theseHands){
            console.log(theseHands)
            res.sendStatus(500)
        }
    },
    login: async (req, res) => {
        console.log('hit login', req.session)
        try{
            const {username, password} = req.body

            let foundUser = await User.findOne({where: {username}})

            if(foundUser){
                const isAuthenticated = bcrypt.compareSync(password, foundUser.hashedPass)

                if(isAuthenticated){
                    req.session.user = {
                        userId: foundUser.dataValues.id,
                        username: foundUser.dataValues.username
                    }
    
                    res.status(200).send(req.session.user)
                } else {
                    res.status(400).send('Incorrect Password')
                }
            } else {
                res.status(400).send('Username doesnt exists')
            }
        } catch(theseHands){
            console.log(theseHands)
            res.sendStatus(500)
        }
    },
    checkUser: (req, res) => {
        console.log(req.session)
        if(req.session.user){
            res.status(200).send(req.session.user)
        } else {
            res.status(400).send('User not found')
        }

    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}