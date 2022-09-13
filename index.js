const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(express.json())

app.use(require('./routes/books.route'))
app.use(require('./routes/users.route'))
app.use(require('./routes/genres.route'))
app.use(require('./routes/reviews.route'))

mongoose.connect(process.env.MONGO_SERVER, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Успешно соединились с сервером MongoDB')

    app.listen(3000, () => {
        console.log('Сервер успешно запущен');
    });
})