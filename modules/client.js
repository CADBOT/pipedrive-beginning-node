// pattern 1. A namespace import
var calc = require('./lib')

console.log(calc.add(2, 4))

// pattern 2. importing only one thing from a library
// that exports multiple things
var add = require('./lib.js').add
var sub = require('./lib.js').sub
//var {add, sub} = require('./lib.js') // es6 destructure of the same things
