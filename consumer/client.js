const request = require('request-promise-native')

const PRODUCTS_SERVICE_URL = process.env.PRODUCTS_SERVICE_URL || 'http://localhost:1234'

async function getUser () {
  return request({
    uri: `${PRODUCTS_SERVICE_URL}/user/1`,
    json: true
  })
 
}


module.exports = {
  getUser
}
