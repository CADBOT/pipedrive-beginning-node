var fs = require('fs')

/* NOT VERY NODE LIKE
var file = fs.readFileSync('./simple-async.js')
console.log(file.toString())
*/

             //Lib UV. Maintains a thread of works
fs.readFile('./simple-async.js', function(err, data) {
  // call back invoked after 2 things happen
  //
  // 1. IO operation has finshed
  // 2. Call stack is done evaluating
  //console.log(data.toString()) 
})

             //Lib UV. Maintains a thread of works
fs.readFile('./simple-async.js', function(err, data) {
})

// We start out in the main context. Run code until we run out
//
// Event loop (queue) is going to queue up with call backs
// JavasScript code is single threaded. But IO is done async
//
//
//
// LAB: Read in one file. After that file has finished reading, read in a second file
//      ADV make sure the file exists using fs.exist, then if it does exist read it in.
// SOLUTION
//
console.log(1)
function otherWork() {
  console.log(3)
}

function main() {
  fs.readFile('./file1.txt', function(err, data) {
    console.log(4)
    if (err) {
        return console.log(err) // early return to cutoff rest of function
    }
    console.log(data.toString())
    fs.readFile('./file2.txt', function(err, data) {
      console.log(6)
      if (err) {
        return console.log(err)
      }
      console.log(data.toString())
      console.log(7)
    })
    console.log(5)
  })
  console.log(2) 
  otherWork()
}

main()
