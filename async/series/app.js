var request = require('request')

var options = {
  url: 'https://api.github.com/users/cadbot',
  headers: {
    'User-Agent': 'node.js'
  }
}

request.get(options, function(err, response, body) {
  if (err) return console.log(err)   
  console.log(body['repos_url'])
  var options = {
    url: body.repos_url,
    headers: {
      'User-Agent': 'node.js'
    }
  }
  request.get(options, function(err, response, body) {
    if (err) return console.log(err)
    console.log(body)
  })
})

var user = 'CADBOT'

function getUser() {
  var options = {
    url: 'https://api.github.com/users/' + user,
    headers: {
      'User-Agent': 'node.js'
    }
  }
  request.get(options, function(err, response, body) {
    if (err) return next(err)
    next(null, JSON.parse(body).repos_url)
  })
}

function getRepos(repos_url) {
  var options = {
    url: repos_url,
    headers: {
      'User-Agent': 'node.js'
    }
  }
  request.get(options, function(err, res, body) {
    // Finish task
    console.log(body)
    next()
  })
}


var tasks = [getUser, getRepos]
function next(err, result) {
  if (err) throw err

  var nextTask = tasks.shift()
  if (nextTask) {
    nextTask(result)
  }
}

next()
