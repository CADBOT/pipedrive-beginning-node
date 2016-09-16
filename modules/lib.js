// node will wrap each file in an iffie
/*
(function() {
  var exports = module.exports
})(module)
*/

// pattern 1 
function add(x, y) {
  return x + y
}
exports.add = add

// pattern 2
exports.sub = function sub(x, y) {
  return x - y
}

// pattern 3
var mult = exports.mult = function(x, y) {
  return x * y
}
