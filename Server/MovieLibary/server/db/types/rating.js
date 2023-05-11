const mongoose = require('mongoose');
const validator = require('validator');
const TmdbRefSchema = require('./tmdb_ref');

const Schema = mongoose.Schema;

const RatingSchema = new Schema({
    rated_content: {
        type: TmdbRefSchema,
    },
    rate: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    comment:
    {
        type: String,
    },
})

module.exports = RatingSchema;