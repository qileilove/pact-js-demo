const request = require('request-promise-native')

const PRODUCTS_SERVICE_URL = process.env.PRODUCTS_SERVICE_URL || 'http://localhost:1234'

async function getUser (query) {
  return request({
    uri: `${PRODUCTS_SERVICE_URL}/user`,
    qs: query,
    json: true
  })
 
}


module.exports = {
  getUser
}
