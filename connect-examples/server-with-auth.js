var connect = require('connect')
var http = require('http')
var app = connect()

var users = {
  cadbot: 'pass1234'
}

function authenticate(req, res, next) {
  var auth = req.headers.authorization
  if (!auth) return res.end('not authorized')
  console.log(auth)
  var parts = auth.split(' ')
  var auth = new Buffer(parts[1], 'base64').toString().split(':')
  var user = auth[0]
  var password = auth[1]
  if (users[user] !== password) {
    return res.end('invalid password')
  }
  req.user = user
  next()
}

function sayHello(req, res) {
  console.log(req.user)
  res.setHeader('content-type', 'text/plain')
  var message = 'hello ' + req.user
  res.end(message)
}

app.use(authenticate)
   .user(sayHello)

http.createServer(app).listen(3000)
