const ONE_PRODUCT_BODY =  {  id: 1,name: 'God' } 

module.exports = {
  getUser: {
    state: 'it has one User',
    uponReceiving: 'a request to get id=1 user',
    withRequest: {
      method: 'GET',
      path: '/user/1'
    },
    willRespondWith: {
      status: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: ONE_PRODUCT_BODY
    }
  }
}
