const User = require('../models/User.model.js')

module.exports.userController = {
    addUser: async (req, res) => {
        const { name, isBlocked } = req.body
        try {
            await User.create({
                name,
                isBlocked
            })
            res.json('Юзер добавлен')
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndRemove(req.params.id)
            res.json('Юзер удален')
        } catch (error) {
            res.json(error.message)
        }
    },
    getUsers: async (req, res) => {
        try {
            const users = await User.find()
            res.json(users)
        } catch (error) {
            res.json(error.message)
        }
    },
    rentBook: async (req, res) => {
        
        try {
            const user = await User.find()
            
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    },
}