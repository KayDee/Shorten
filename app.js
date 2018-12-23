let fs = require('fs')
let path = require('path')
let express = require('express')
let app = express()
let router = express.Router()

// let index = require('./src/ind.html')

app.use(express.static(path.join(__dirname, 'src')))

// app.use('/', function(req, res){
  // res.render('index')
  // console.log(path.join(__dirname, '/index.html'))
  // res.sendFile(path.join(__dirname, 'src/index.html'))
  // console.log(res)
// })

// app.use('/', index)

router.get('/', function(req, res){
  res.send(' Yo yo')
})

app.use('/', router)

app.listen(4000, function(){
  console.log('Hearing')
})