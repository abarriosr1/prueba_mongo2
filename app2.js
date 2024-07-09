
const express = require('express')
/*require('dotenv').config()*/

const multer = require('multer')
/*const upload=multer({dest: 'uploads/'})*/ /*para almacenar en un destino especifico, carpeta uploads*/

const sharp = require('sharp')
/*const fs = require('fs')*/

const storageStrategy=multer.memoryStorage()
const upload=multer({storage: storageStrategy}) /*para almacenar en memoria*/

const app=express()

app.use(express.json())

app.get('/', function(req, res){
    res.send('Hello')})

    /*console.log(body)*/
    /*res.send('PRUEBA DESDE EL POST con nodemon')*/
    res.send({resizeImage: resizeImagebuffer})

/*app.listen(3000)*/

/*
const PORT = process.env.PORT || 4000

app.listen(PORT,(){
    console.log('servidor escuchando en el puerto', PORT)
})*/

const PORT = process.env.PORT

app.listen(PORT,() => {
    console.log('servidor escuchando en el puerto ${PORT}')
})

