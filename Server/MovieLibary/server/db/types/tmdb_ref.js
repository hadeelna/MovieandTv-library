const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const TmdbRefSchema = new Schema({

        tmdb_id: {
            type: Number,
            required: true

        },
        name:
        {
            type: String, //from TMDB
            required: true
        },
        nickname: { // the name the user gives to the content
            type: String, // content(movie\tv)
            maxlength: 50,
            trim: true
        },
        type: {
            type: String,
            enum: ["movie", "tv"]
        }

})




module.exports = TmdbRefSchema;