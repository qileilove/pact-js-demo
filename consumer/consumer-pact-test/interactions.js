const ONE_PRODUCT_BODY = [ {  id: 1,name: 'God' } ]
const PRICE_FILTERED_PRODUCT_QUERY= {'id':'1'}

module.exports = {
  getUser: {
    state: 'it has one User',
    uponReceiving: 'a request to get id=1 user',
    withRequest: {
      method: 'GET',
      path: '/user',
      query: PRICE_FILTERED_PRODUCT_QUERY

    },
    willRespondWith: {
      status: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: ONE_PRODUCT_BODY
    }
  }
}
