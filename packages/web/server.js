const express = require('express')
const path = require('path')
const app = express()

app.listen(process.env.NODE_PORT || 8080, () => {
  console.log('Express Web Server Listening for requests')
})

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
