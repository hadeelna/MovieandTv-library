const mongoose = require('mongoose');
connect();
async function connect() {
    await mongoose.connect('mongodb://localhost:27017/Movie-Library');
}