var express = require('express')
var app = express()
// app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.send('hello dadsfdasorld')
})

// 1. Make route for page.html
// app.get('/page', function (req, res) {
//   res.sendfile(__dirname+'/page.html')
// })

// 2. Make route for page.html
app.get('/page', function (req, res) {
  res.render('/page.html')
})

// app.use('/page', page)

app.listen(3000)