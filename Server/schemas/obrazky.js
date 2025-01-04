const mongoose = require ("mongoose");

const obrazekSchema = new mongoose.Schema({
    name:String,
    sort:Number
},
{collection: "Obrazky"})

module.exports = mongoose.model("Obrazky", obrazekSchema)