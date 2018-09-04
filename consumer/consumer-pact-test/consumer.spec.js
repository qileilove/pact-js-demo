const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const provider = require('./provider')
const client = require('../client')
const interactions = require('./interactions')
const expect = chai.expect
chai.use(sinonChai)

describe('product handling', () => {
  const sandbox = sinon.createSandbox()

  before(async function () {
    this.timeout(10000) // it takes time to start the mock server
    await provider.setup()
  })

  afterEach(() => {
    sandbox.restore()
  })

  after(async function () {
    this.timeout(10000) // it takes time to stop the mock server and gather the contracts
    await provider.finalize()
  })

  describe('#getAllUsers', () => {
    it('should get all users from server', async function () {
      await provider.addInteraction(interactions.getUser)

      const productList = await client.getUser({'id':'1'})
      expect(productList).to.eql([  {  id: 1,name: 'God' }])

      await provider.verify()
    })

  })

})
