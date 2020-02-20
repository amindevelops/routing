var express = require('express')
var app = express()
// var page = express()

app.get('/', function (req, res) {
  res.send('hello dadsfdasorld')
})

// 1. Make route for page.html
// app.get('/page', function (req, res) {
//   res.sendfile(__dirname+'/page.html')
// })

// 2. Make route for page.html
app.get('/page', function (req, res) {
  res.render('page', function (err, html) {
    res.send(html)
  })
})

// app.use('/page', page)

app.listen(3000)