var express = require('express')
var bodyParser = require('body-parser')
var http = require('http')
var app = express()
var fs = require('fs')

// enable cors in a rael app

app.use(bodyParser())

fs.readdirSync('./routes')
  .filter(function(file) {
    return (file.indexOf('.') !== 0)
  })
  .forEach(function(file) {
    require('./routes/ + file)(app)
  })

var PORT = process.env.PORT || 3000

app.listen(PORT, function() {
  console.log('app listening on port: ' + PORT)  
})
