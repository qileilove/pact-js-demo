const pact = require('@pact-foundation/pact-node');
const path = require('path');
const opts = {
  pactFilesOrDirs: [path.resolve(__dirname, '../pacts')],
  pactBroker: 'http://localhost:8080/',
  consumerVersion: '1.0.3'
}

pact.publishPacts(opts)
  .then(() => {
    console.log('Pact contract publishing complete!')
    console.log('')
  
  })
  .catch(e => {
    console.log('Pact contract publishing failed: ', e)
  })
