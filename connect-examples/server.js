var connect = require('connect')
var http = require('http')

var app = connect()

function logger(req, res, next) {
  console.log(req.url)
  console.log(req.method)
  next()
}

var count = 0
function countRequests(req, res, next) {
  count++
  next()
}

function sayHello(req, res) {
  res.setHeader('content-type', 'text/plan')
  res.end('hello')
}


// write a middlewear that logs the number of requests

app.use(logger)
   .use(sayHello)

http.createServer(app).listen(3000)
