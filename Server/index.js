const express = require('express')
const mongoose = require("mongoose")
const multer = require("multer")
const cors = require("cors")
const obrazky = require("./schemas/obrazky.js")
const path = require('path')

var url = "mongodb://localhost:27017/IMP";

mongoose.connect(url)
const app = express()
const port = 3001

const storage = multer.diskStorage({
    destination: function (req,file, callback) {
        callback(null, __dirname + "/images/galery")
    },
    filename: function (req, file, callback){
        callback(null, file.originalname + ".jpg")
    }
})

const upload = multer({ storage:storage})

app.use(cors());

app.use(express.static(path.join(__dirname, "/images")))

app.get('/', (req, res) =>{
    res.send("lomeno")
})
app.get('/getAllImages', (req, res) =>{
    obrazky.find()
        .then((queryResponse) => { console.log(queryResponse)})


    res.send("obrazky")
})
app.post('/uploadImage', upload.single("image") ,(req, res) =>{

    res.send("uuuu")
})
app.get('/adminLogin', (req, res) =>{
    console.log(req.query.password)
    if(req.query.password == "AaAa"){
        res.send("SUCCESS")
    }
    else{
        res.send("WRONG")
    }
})



app.listen(port)