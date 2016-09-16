var express = require('express')
var http = require('http')
var app = express()

app.use(express.static('public'))
app.use(logger)

function logger(req, res, next) {
  console.log(req.url)
  console.log(req.method)
  next()
}

app.get('/hello', function(req, res) {
  res.json({
    msg: 'hello'
  })
})

app.get('/', function(req, res) {
  res.json({msg: 'get received'})
})

app.post('/', function(req, res) {
  res.json({msg: 'post received'})
})

app.delete('/', function(req, res) {
  res.json({msg: 'delete received'})
})

app.listen(3000, function() {
  console.log('server started on port 3000')
})
//http.createServer(app).listen(3000)
