const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    isBlocked: {type: Boolean, required: true},
    booksId: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Book'}]
})

const User = mongoose.model('User', userSchema)
module.exports = User