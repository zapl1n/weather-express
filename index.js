const express = require('express')
const app = express()

const path = require('path')

app.set('view egnine','ejs')
app.set('views',path.join(__dirname,'views'))

app.get('/',function (req,res){
    res.render('index.ejs')
})

app.listen(3000)