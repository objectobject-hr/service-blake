const Product = require('./models/Product')
const Review = require('./models/Review')

module.exports = {
  get: function(req, res) {
    const id = rand(1, 100)
    Product.findOne({ id: id }, (err, product) => {
      if (err) console.error(err)
      else {
        Review.find({ productId: id }, (err, reviews) => {
          if (err) console.error(err)
          else {
            res.send({ product, reviews })
          }
        })
      }
    })
  }
}
