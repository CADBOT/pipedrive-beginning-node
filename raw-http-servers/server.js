var http = require('http')

var todos = [
  'learn node',
  'learn servers'
]


var server = http.createServer(function(request, response) {
  switch (request.method) {
    case 'GET':
      response.writeHead(200, {"Content-type": "application/json"})
      response.end(todos)
    case 'POST':
      var todo = ''
      request.setEncoding('utf8')
      request.on('data', function(chunk) {
        todo += todo
      })
      request.on('end', function(chunk) {
        todos.push(item)
        response.end('Done')
      })

  }
})

server.listen(3000)
