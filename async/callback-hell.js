var fs = require('fs')

fs.readFile('./file1.txt'), function(err, data) {
  if (err) return console.log(err)
  // do stuff with file 1
  fs.readFile('./file2.txt'), function(err, data) {
    if (err) return console.log(err)
    // do stuff with file 2
    fs.readFile('./file3.txt'), function(err, data) {
      if (err) return console.log(err)
      // do stuff with file 3
      fs.readFile('./file4.txt'), function(err, data) {
        if (err) return console.log(err)
        // do stuff with file 4
      })
    })
  })
})
