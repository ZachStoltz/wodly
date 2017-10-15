import restify from 'restify'
import redis from 'redis'
import util from 'util'

const server = restify.createServer()

server.listen(process.env.NODE_PORT || 8080, () => {
  console.log('Cache Service listening for requests')
})
