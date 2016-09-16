var options1 = {
  url: 'https://api.github.com/users/cadbot',
  headers: {
    'User-Agent': 'node.js'
  }
}
var options2 = {
  url: 'https://api.github.com/users/torvalds',
  headers: {
    'User-Agent': 'node.js'
  }
}

request.get(options1, function(err, response, body) {
  if (err) return console.log(err)
  // write to a file. Or process however
  console.log(body)
})

request.get(options2, function(err, response, body) {
  if (err) return console.log(err)
  // write to a file. Or process however
  console.log(body)
})

var results = []

function getUser(user) {
  var options = {
    url: 'https://api.github.com/users/' + user,
    headers: {
      'User-Agent': 'node.js'
    }
  }

  request.get(options, function(err, res, body) {
    if (err) throw err
    results.push(body)
    checkForCompletion()
  })
}

var tasks = [
  function() {
    getUser('CADBOT')
  },
  function() {
    getUser('torvalds')
  }
]

var tasksCompleted = 0

function checkForCompletion() {
  tasksCompleted++
  if (tasksCompleted === tasks.length) {
    console.log('Done!')
    console.log(results)
  }
}

tasks.forEach(function(task) {
  task()
})

// For a particular repo. Download the data for every repo that forks it.
// ADV git clone for each repo in your local directory






