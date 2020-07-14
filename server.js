var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

https.createServer({
  	key: fs.readFileSync('server.key'),
  	cert: fs.readFileSync('server.cert')
	}, app)
  .listen(8002, function () {
  	console.log('Example app listening on port 8002! Go to https://localhost:3000/')
	})
	  
	  