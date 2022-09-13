const Genre = require('../models/Genre.model.js')

module.exports.genreController = {
    addGenre: async (req, res) => {
        const { name, } = req.body
        try {
            await Genre.create({
                name,
            })
            res.json('Жанр добавлен')
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteGenre: async (req, res) => {
        try {
            await Genre.findByIdAndRemove(req.params.id)
            res.json('Жанр удален')
        } catch (error) {
            res.json(error.message)
        }
    },
    getGenres: async (req, res) => {
        try {
            const genres = await Genre.find()
            res.json(genres)
        } catch (error) {
            res.json(error.message)
        }
    },
    updateGenre: async (req, res) => {
        try {
            await Genre.findByIdAndUpdate(req.params.id, {
                name: req.body.name
            })
            res.json('Изменения сохранены')
        } catch (error) {
            res.json(error.message)
        }
    },
}