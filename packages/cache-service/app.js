const restify = require('restify')
const redis = require('redis')
const util = require('util')

const server = restify.createServer()

server.listen(process.env.NODE_PORT || 8080, () => {
  console.log('Cache Service listening for requests')
})
