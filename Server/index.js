const express = require('express')
const mongoose = require("mongoose")
const multer = require("multer")
const cors = require("cors")
const obrazky = require("./schemas/obrazky.js")
const path = require('path')

const bcrypt = require('bcryptjs');

const fs = require("fs")

require('dotenv').config({ path: '../.env' })

// var url = "mongodb://localhost:27017/IMP";
var url = process.env.REACT_APP_MONGO_STRING || "mongodb://localhost:27017/IMP";

console.log(url)

mongoose.connect(url).then(()=>console.log(url)).catch((err)=>console.log(err))
const app = express()
const port = process.env.REACT_APP_BACKEND_PORT || 4000;

const storage = multer.diskStorage({
    destination: function (req,file, callback) {
        callback(null, __dirname + "/images/galery")
    },
    filename: function (req, file, callback){
        // callback(null, file.fieldname + ".jpg")
        callback(null, file.originalname + ".jpg")

        // const nameWithoutExt = path.parse(file.originalname).name;
        // callback(null, `${nameWithoutExt}.jpg`);
    }
})

const upload = multer({ storage:storage})

app.use(cors());

app.use(express.static(path.join(__dirname, "/images")))

app.get('/', (req, res) =>{
    res.send("lomeno")
})
//ziskani vsech obrazku z galerie
app.get('/getAllImages', (req, res) =>{
    obrazky.find()
        .then((queryResponse) => {
             res.send(queryResponse)
            })
})
//smazani obrazku z galerie
app.delete('/deleteImages', async (req, res) =>{
    console.log(req.query.id)

    await obrazky.findOneAndDelete({_id: req.query.id})

    console.log(req.query.name);

    fs.unlink("./images/galery/" + req.query.name + ".jpg", (err) =>{
        console.log(err)
    })

    res.send("DELETED")
})
//nahrani obrazku do galerie
app.post('/uploadImage', upload.single("image") ,(req, res) =>{
    console.log(req.file)
    let novejobrazek = new obrazky({
        name:req.file.originalname, //originalname
        sort:4
    });
    novejobrazek.save()
    res.send("uuuu")
})


const crypto = require('crypto');

// Uložený hash hesla (tento hash by měl být uložen v databázi)
const storedHash = crypto.createHash('sha256').update('AaAa').digest('base64');  // "AaAa"

// Kontrola hesla na serveru
app.get('/adminLogin', (req, res) => {
    const passwordFromClient = req.query.password;  // Heslo poslané z klienta (hashované)

    console.log("heslo z klienta:", passwordFromClient); 

    // Porovnání hashe od klienta s uloženým hashem
    if (passwordFromClient === storedHash) {
        res.send("SUCCESS");
    } else {
        res.send("WRONG");
    }
});





app.listen(port)