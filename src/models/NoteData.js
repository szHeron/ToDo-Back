const mongoose = require('mongoose');

const NoteDataSchema = new mongoose.Schema({
    title: String,
    type: String,
    done: Boolean,
    createAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('notes', NoteDataSchema);