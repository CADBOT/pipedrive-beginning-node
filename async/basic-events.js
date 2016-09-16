var EventEmitter = require('events')
var util = require('util')

var myEmitter = new EventEmitter()
// events are simple strings
//
myEmitter.on('file2', function(err, data) {
  fs.readFile('./file2.txt', function(err, data) {
    if (err) return console.log(err)
    myEmitter.emit('file3')
  })
})

function readFile1() {
  fs.readFile('./file1.txt', function(err, data) {
    if (err) return console.log(err)
    myEmitter.emit('file2')    
  })
}

readFile1()

// promise based solution
//
readFile('fileone.txt')
  .then( function() {return readFile('readFile2.txt')})
