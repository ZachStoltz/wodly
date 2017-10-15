import express from 'express'
import path from 'path'
import dirModule from './dirname'

const { __dirname } = dirModule
const app = express()

app.listen(process.env.NODE_PORT || 8080, () => {
  console.log('Express Web Server Listening for requests')
})

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
