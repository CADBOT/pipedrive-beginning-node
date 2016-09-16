var http = require('http')

var todos = [
  'learn node',
  'learn servers'
]


var server = http.createServer(function(request, response) {
  switch (request.method) {
    case 'GET':
      var html = '<html><head><title>Todos</title></head><body'
               + '<ul>'
               + items.map(function(item) {
                   return '<li>' + item + '</li>'
                 }).join(' ')
               + '</ul>'
               + '</body></html'
      response.setHeader('Content-Type', 'text/html')
      // response.setHeader('Content-Length', Buffer.byteLength(html)) good to know for later
      res.end(html)
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
