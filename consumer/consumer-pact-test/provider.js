const path = require('path')
const pact = require('pact');
  //  creat a Pact object,just like a mock server 

const provider = pact({
  consumer: 'QileiTestClient', // current service at hand, it makes it easier to know who would be broken by the change in the provider when we test the contract.
  provider: 'QileiTestProductService', // required, so we know who will need to verify the pact
  port: 1234, // where the mock service should be listening
  log: path.resolve(__dirname, '../../logs', 'pact-test.log'), // path to the file where logs should be stored
  logLevel: 'ERROR', // one of 'TRACE', 'DEBUG', 'INFO', 'ERROR', 'FATAL' OR 'WARN'
  dir: path.resolve(__dirname, '../../pacts'), // path to the files where the pact should be saved
  spec: 2 // the pact specification we are using
})

module.exports = provider
