const express = require('express')
const app = express()

const path = require('path')
const fetch = require('node-fetch')

app.set('view egnine','ejs')
app.set('views',path.join(__dirname,'views'))

const key = 'feabf737c0396f2a57dddb353e18684c'
let city = 'Tartu'

app.get('/',function (req,res){
fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}')
    .then((responce)=>{
        return responce.json()
    })
    .then((data) => {
        let description = data.weather[0].description
        let city = data.name
        let temp = Math.round(parseFloat(data.main.temp)-273.15)
        let result = {
            description: description,
            city: city,
            temp: temp,
            error: null
        }
        resolve(result)
    })
    .catch(error => {
        reject(error)

    })
    res.render('index.ejs')
})

app.listen(3000)