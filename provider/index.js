const app = require('./services/providerServices')
const port = process.env.PORT || 3001


app.listen(port, (err) => {
  if (err) {
    throw err
  }
  console.log('SERVER: ProductService listening at', port)
})
