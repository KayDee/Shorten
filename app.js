let fs = require('fs')
let path = require('path')
let express = require('express')
let app = express()

app.use(express.static(path.join('__dirname', 'src')))

app.use('/', function(req, res){
  res.render('index')
})

app.listen(4000, function(){
  console.log('Hearing')
})